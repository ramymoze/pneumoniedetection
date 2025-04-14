import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { useState } from 'react';

interface Patient {
  Last_Name: string;
  Name: string;
  Age: string;
  Date_of_birth: string;
  Place_of_birth?: string;
  Med_condition?: string;
}

function createPatient(
  Last_Name: string,
  Name: string,
  Age: string,
  Date_of_birth: string,
  Place_of_birth?: string,
  Med_condition?: string
): Patient {
  return { Last_Name, Name, Age, Date_of_birth, Place_of_birth, Med_condition };
}

const initialPatients: Patient[] = [
  createPatient('Smith', 'John', '35', '1988-05-15', 'New York', 'Hypertension'),
  createPatient('Johnson', 'Emily', '42', '1981-08-22', 'Chicago', 'Diabetes'),
  createPatient('Williams', 'Michael', '28', '1995-02-10', 'Los Angeles'),
  createPatient('Brown', 'Sarah', '51', '1972-11-30', 'Houston', 'Asthma'),
  createPatient('Jones', 'David', '39', '1984-07-18', 'Philadelphia'),
];

export default function PatientList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <TableContainer>
        <Table 
          sx={{ 
            minWidth: 650,
            '& .MuiTableCell-root': {
              py: 1.5,
              fontSize: '0.875rem'
            }
          }}
          aria-label="patient table"
        >
          <TableHead sx={{ bgcolor: '#5D7285' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 600 }}>Last Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Age</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Date of Birth</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Place of Birth</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">Medical Condition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {initialPatients
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((patient) => (
                <TableRow
                  key={`${patient.Last_Name}-${patient.Name}`}
                  hover
                  sx={{ 
                    '&:nth-of-type(even)': { bgcolor: '#f5f5f5' },
                    '&:last-child td': { border: 0 }
                  }}
                >
                  <TableCell component="th" scope="row">
                    {patient.Last_Name}
                  </TableCell>
                  <TableCell align="right">{patient.Name}</TableCell>
                  <TableCell align="right">{patient.Age}</TableCell>
                  <TableCell align="right">{patient.Date_of_birth}</TableCell>
                  <TableCell align="right">{patient.Place_of_birth || '-'}</TableCell>
                  <TableCell align="right">{patient.Med_condition || '-'}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={initialPatients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          borderTop: '1px solid #e0e0e0',
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
            fontSize: '0.875rem'
          }
        }}
      />
    </Paper>
  );
}