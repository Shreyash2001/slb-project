import * as React from 'react';
import "./Crew.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}
  
const rows = [  
  createData('1', "Muskan", 6.0, 24, 4.0),
  createData('2', "Nistha", 9.0, 37, 4.3),
  createData('3', "Rutuja", 16.0, 24, 6.0),
  createData('4', "Akshada", 3.7, 67, 4.3),
  createData('5', "Varsha", 16.0, 49, 3.9),
  createData('6', "Bidisha", 16.0, 49, 3.9),
  createData('7', "Pratish", 16.0, 49, 3.9),
  createData('8', "Sumit", 16.0, 49, 3.9),
  createData('9', "Shreyash", 16.0, 49, 3.9),
  createData('10', "Tushar", 16.0, 49, 3.9),
  ];

export default function BasicTable() {
    const [rig, setRig] = React.useState('');

  const handleChange = (event) => {
    setRig(event.target.value);
    console.log(rig);
  };
  return (
    <TableContainer className="table_container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:"20px"}}>Sr. No</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">Name</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">From Date</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">To Date</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">Rig</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">Shift</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                  <h3>{row.calories}</h3>
              </TableCell>
              <TableCell align="right">
                  <input type="date" style={{padding:"15px"}} />
              </TableCell>
              <TableCell align="right">
                  <input type="date" style={{padding:"15px"}} />
              </TableCell>
              <TableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Rigs</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Rigs"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>A</MenuItem>
                    <MenuItem value={20}>B</MenuItem>
                    <MenuItem value={30}>C</MenuItem>
                    <MenuItem value={40}>D</MenuItem>
                    <MenuItem value={50}>E</MenuItem>
                    </Select>
                </FormControl>
                </Box>
              </TableCell>
              <TableCell align="right">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Shifts</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Shift"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>12AM - 6AM</MenuItem>
                    <MenuItem value={20}>6AM - 12PM</MenuItem>
                    <MenuItem value={20}>12PM - 6PM</MenuItem>
                    <MenuItem value={20}>6PM - 12am</MenuItem>
                    </Select>
                </FormControl>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
