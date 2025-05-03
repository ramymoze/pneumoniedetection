import { useState, FormEvent } from 'react';
import { supabase } from '../supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

type UserType = 'radiologue' | 'doctor';
type AuthMode = 'login' | 'signup';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('radiologue');
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            user_type: userType,//user type radiologue / doctor nb3tha l supabase
          },
        },
      });
  
      if (authError) throw new Error(authError.message);
      if (!authData.user) throw new Error('User creation failed unexpectedly.');
  
      const userId = authData.user.id; // important: link Supabase user
  
      // Choose backend route based on userType
      const apiUrl = userType === 'radiologue'
        ? 'http://localhost:3000/create_radiologue'//fl production nbedelha lazm
        : 'http://localhost:3000/create_doctor';
  
      // Send user info to backend API (Express)
      await axios.post(apiUrl, {
        id: userId,    //nb3t t3 supabase tssema 3ndhm nafs l id   ,sending to  prisma 
        firstName,
        lastName,
        email,
        password,
      });
  
      toast.success('Registration successful! Please check your email to confirm your account.');
    } catch (err) {
      console.error('Signup error:', err);
      toast.error(err instanceof Error ? err.message : 'An unexpected error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // 1. Supabase Authentication
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ 
        email: email.trim(), 
        password 
      });
  
      if (authError) {
        // Check if it's a known Supabase error
        if (authError.code === '401') {
          throw new Error('Invalid credentials - Please check your email or password');
        }
        throw new Error(`Authentication error: ${authError.message}`);
      }
  
      if (!authData.user) {
        throw new Error('Login failed - No user data returned');
      }
  
      // 2. Verify user profile exists (Backend API)
      const response = await axios.post('http://localhost:3000/login', {
        email: email.trim(),
        userType,
      }, {
        headers: {
          'Authorization': `Bearer ${authData.session?.access_token}` // Use the access token from Supabase
        }
      });
  
      if (response.status === 404) {
        throw new Error(`${userType} profile not found with this email`);
      }
      
      if (!response.data) {
        throw new Error('No user data returned from server');
      }
  
      const userData = response.data;
  
      // 3. Store session data
      localStorage.setItem('userType', userType);
      localStorage.setItem('authToken', authData.session?.access_token || '');
      localStorage.setItem('user', JSON.stringify(userData));
  
      // 4. Success handling with guaranteed redirect
      toast.success('Login successful! Redirecting...');
      
      // Always redirect after successful login
      const redirectPath = userType === 'radiologue' 
        ? '/radiologue_interface' 
        : '/doctor_interface';
      
      // Use replace to prevent back navigation to login
      setTimeout(() => {
        window.location.replace(redirectPath);
      }, 1800);
    } catch (err: unknown) {
      console.error('Login error:', err);
  
      // Clear any partial authentication
      await supabase.auth.signOut();
      localStorage.removeItem('userType');
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
  
      let errorMessage = 'An unexpected error occurred during login';
  
      if (err instanceof Error) {
        // If it's an Axios error (which contains the response)
        if (axios.isAxiosError(err)) {
          if (err.response) {
            // Check for specific response error codes from the backend
            if (err.response.status === 404) {
              errorMessage = `User not found: ${err.response.data.error}`;
            } else if (err.response.status === 500) {
              errorMessage = 'Internal server error on backend';
            } else {
              errorMessage = `Backend error: ${err.response.data.error || 'Unknown error'}`;
            }
          } else {
            errorMessage = `Network error: Unable to reach the server`;
          }
        } else {
          errorMessage = err.message;
        }
      }
  
      toast.error(errorMessage);
  
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {authMode === 'login' ? 'Sign in to your account' : 'Create an account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {authMode === 'login' ? 'New user? ' : 'Already have an account? '}
            <Button
              variant="link"
              onClick={toggleAuthMode}
              className="font-medium text-blue-600 hover:text-blue-500 p-0 h-auto"
            >
              {authMode === 'login' ? 'Create an account' : 'Sign in'}
            </Button>
          </p>
        </div>

        <div className="mt-8 bg-white p-8 rounded-lg shadow sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={authMode === 'login' ? handleLogin : handleSignup}>
          

            {authMode === 'signup' && (
              <div>
                  <div>
              <Label className="block text-sm font-medium text-gray-700">I am a</Label>
              <RadioGroup
                defaultValue="radiologue"
                className="mt-1 flex space-x-4"
                value={userType}
                onValueChange={(value: string) => setUserType(value as UserType)}
              >
                {['radiologue', 'doctor'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="capitalize">
                      {type}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              </div>
            )}

            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                authMode === 'login' ? 'Signing in...' : 'Creating account...'
              ) : authMode === 'login' ? 'Sign in' : 'Create account'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}