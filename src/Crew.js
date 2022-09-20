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
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';

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
  createData('1', "Muskan", "Field Manager"),
  createData('2', "Nistha", "Sampling Specialist"),
  createData('3', "Rutuja", "Field Manager"),
  createData('4', "Akshada", "Coring Specialist"),
  createData('5', "Varsha", "Field Manager"),
  createData('6', "Bidisha", "Capstan Specialist"),
  createData('7', "Pratish", "Operator"),
  createData('8', "Sumit", "Sampling Specialist"),
  createData('9', "Shreyash", "Coring Specialist"),
  createData('10', "Tushar", "Operator"),
  ];

export default function BasicTable() {
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 4,
    outline:'none'
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [rig, setRig] = React.useState('');

  const handleChange = (event) => {
    setRig(event.target.value);
    console.log(rig);
  };
  return (
      
    <TableContainer className="table_container">
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"-2rem"}}>
        <h1 style={{marginLeft:"10px"}}>Crew & Job Scheduling</h1>
        <Button onClick={handleOpen} style={{color:"#fff", backgroundColor:"rgba(46, 86, 247, 0.649)", width:"100px", textTransform:"inherit", marginRight:"10px"}}>Submit</Button>
      </div>
    <div style={{backgroundColor:"beige", borderRadius:"22px", padding:"10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:"20px"}}>Sr. No</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">Name</TableCell>
            <TableCell style={{fontSize:"20px"}} align="right">Roles</TableCell>
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
                  <h4>{row.fat}</h4>
              </TableCell>
              <TableCell align="right">
                  <input type="date" style={{padding:"15px", backgroundColor:"beige", border:"none"}} />
              </TableCell>
              <TableCell align="right">
                  <input type="date" style={{padding:"15px", backgroundColor:"beige", border:"none"}} />
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
      </div>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{borderRadius:"22px"}} sx={style}>
          <div>
          <img style={{width:"150px", height:"150px", marginLeft:"120px", marginTop:"50px"}} src="https://c.tenor.com/bm8Q6yAlsPsAAAAi/verified.gif" alt="" />
          </div>
          <div>
            <h2 style={{color:"green", marginLeft:"80px"}}>Submitted Successfully</h2>
          </div>
        </Box>
      </Modal>
    </div>
    </TableContainer>
  );
}
