import { useState } from "react";
import supabase from "../supabaseClient";

function Log_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setMessage(""); // Reset any previous message

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage("Error logging in: " + error.message); // Display error message
    } else {
      setMessage("Logged in successfully!"); // Success message
      console.log(data); // Log the user data to the console (you can redirect or perform other actions here)
    }
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="text" 
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
      <p>{message}</p> {/* Display the result message */}
    </div>
  );
}

export default Log_in;
