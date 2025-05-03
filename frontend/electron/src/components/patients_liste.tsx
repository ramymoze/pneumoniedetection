import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, Button, Typography, Box, styled
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { Inbox as InboxIcon } from '@mui/icons-material';

// Match the backend model
interface Patient {
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  placeOfBirth?: string | null;
  medicalHistory?: string | null;
  email?: string;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    minWidth: '500px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  padding: theme.spacing(1, 3),
}));

const EmptyState = () => (
  <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 6,
      textAlign: 'center',
      color: 'text.secondary',
    }}
  >
    <InboxIcon sx={{ fontSize: 60, mb: 2, color: 'action.disabled' }} />
    <Typography variant="h6" gutterBottom>
      No patients found
    </Typography>
    <Typography variant="body2">
      Add a new patient to get started
    </Typography>
  </Box>
);

export default function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    dateOfBirth: '',
    placeOfBirth: '',
    medicalHistory: '',
    email: '',
    password: '',
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get_patients');
      setPatients(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error('Error fetching patients:', err);
      toast.error('Failed to fetch patients.');
      setPatients([]);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleCreate = async () => {
    try {
      const ageInt = parseInt(form.age, 10);
      if (isNaN(ageInt)) {
        toast.error('Age must be a valid number.');
        return;
      }

      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        age: ageInt,
        dateOfBirth: new Date(form.dateOfBirth).toISOString(),
        placeOfBirth: form.placeOfBirth?.trim() || null,
        medicalHistory: form.medicalHistory?.trim() || null,
        email: form.email?.trim(),
        password: form.password,
      };

      await axios.post('http://localhost:3000/create_patient', payload);

      toast.success('Patient created successfully!');
      setOpen(false);
      fetchPatients();
    } catch (err: any) {
      console.error('Failed to create patient:', err);
      toast.error(err?.response?.data?.error || 'Failed to create patient. Please try again.');
    }
  };

  const displayedPatients = patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <Toaster position="top-center" richColors />
      
      <StyledButton 
        variant="contained" 
        color="primary" 
        onClick={() => setOpen(true)}
        sx={{ mb: 3 }}
      >
        Add Patient
      </StyledButton>

      <StyledDialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Add New Patient
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField name="lastName" label="Last Name" fullWidth margin="dense" value={form.lastName} onChange={handleChange} />
            <TextField name="firstName" label="First Name" fullWidth margin="dense" value={form.firstName} onChange={handleChange} />
            <TextField name="age" label="Age" fullWidth margin="dense" value={form.age} onChange={handleChange} />
            <TextField name="dateOfBirth" label="Date of Birth" type="date" fullWidth margin="dense" InputLabelProps={{ shrink: true }} value={form.dateOfBirth} onChange={handleChange} />
          </Box>
          <TextField name="placeOfBirth" label="Place of Birth" fullWidth margin="dense" value={form.placeOfBirth} onChange={handleChange} />
          <TextField name="medicalHistory" label="Medical History" fullWidth margin="dense" value={form.medicalHistory} onChange={handleChange} />
          <TextField name="email" label="Email" type="email" fullWidth margin="dense" value={form.email} onChange={handleChange} />
          <TextField name="password" label="Password" type="password" fullWidth margin="dense" value={form.password} onChange={handleChange} />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <StyledButton onClick={() => setOpen(false)}>Cancel</StyledButton>
          <StyledButton onClick={handleCreate} variant="contained" disabled={!form.firstName || !form.lastName || !form.email}>
            Create Patient
          </StyledButton>
        </DialogActions>
      </StyledDialog>

      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <TableContainer>
          {patients.length === 0 ? (
            <EmptyState />
          ) : (
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
                <TableRow>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }}>Last Name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">First Name</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Age</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Date of Birth</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Place of Birth</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Medical History</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedPatients.map((patient, index) => (
                  <TableRow key={index} sx={{ '&:nth-of-type(even)': { backgroundColor: 'action.hover' } }}>
                    <TableCell>{patient.lastName}</TableCell>
                    <TableCell align="right">{patient.firstName}</TableCell>
                    <TableCell align="right">{patient.age}</TableCell>
                    <TableCell align="right">{new Date(patient.dateOfBirth).toLocaleDateString()}</TableCell>
                    <TableCell align="right">{patient.placeOfBirth || '-'}</TableCell>
                    <TableCell align="right">{patient.medicalHistory || '-'}</TableCell>
                    <TableCell align="right">{patient.email || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {patients.length > 0 && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={patients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={e => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
            sx={{ borderTop: '1px solid', borderColor: 'divider' }}
          />
        )}
      </Paper>
    </>
  );
}
