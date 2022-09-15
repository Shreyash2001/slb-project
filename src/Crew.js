import * as React from 'react';
import "./Crew.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
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
  createData('Frozen yoghurt', "Muskan", 6.0, 24, 4.0),
  createData('Ice cream sandwich', "Nishtha", 9.0, 37, 4.3),
  createData('Eclair', "Rutuja", 16.0, 24, 6.0),
  createData('Cupcake', "Akshada", 3.7, 67, 4.3),
  createData('Gingerbread', "Varsha", 16.0, 49, 3.9),
  createData('Gingerbread', "Bidisha", 16.0, 49, 3.9),
  createData('Gingerbread', "Pratish", 16.0, 49, 3.9),
  createData('Gingerbread', "Sumit", 16.0, 49, 3.9),
  createData('Gingerbread', "Shreyash", 16.0, 49, 3.9),
  createData('Gingerbread', "Tushar", 16.0, 49, 3.9),
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
            <TableCell style={{fontSize:"20px"}}>Select</TableCell>
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
                <Checkbox />
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
                    <MenuItem value={10}>Digboi</MenuItem>
                    <MenuItem value={20}>Digboi</MenuItem>
                    <MenuItem value={30}>Kakinada</MenuItem>
                    <MenuItem value={40}>Kakinada</MenuItem>
                    <MenuItem value={50}>Bombay High, Arabian Sea</MenuItem>
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
                    <MenuItem value={10}>Team Alpha 1</MenuItem>
                    <MenuItem value={20}>Team Alpha 2</MenuItem>
                    <MenuItem value={20}>Team Beta 1</MenuItem>
                    <MenuItem value={20}>Team Beta 2</MenuItem>
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
