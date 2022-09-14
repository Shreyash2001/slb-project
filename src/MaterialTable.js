import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Rig 1", 29, 60, 24, 40),
  createData("Rig 2", 27, 90, 37, 53),
  createData("Rig 3", 262, 16, 24, 60),
  createData("Rig 4", 305, 37, 67, 43),
  createData("Rig 5", 356, 16, 49, 30),
];

export default function BasicTable() {
  return (
    <TableContainer>
        <div style={{marginLeft:"50px", marginTop:"0px", display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
            <h1>Material Board</h1>
            <div style={{width:"20px", height:"20px", backgroundColor:"red"}} />
        </div>
      <Table
        sx={{ maxWidth: 850 }}
        style={{
          boxShadow:
            "0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)",
          margin: "2rem 2rem",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Materials</TableCell>
            <TableCell align="right">Cement</TableCell>
            <TableCell align="right">Sand</TableCell>
            <TableCell align="right">Brick</TableCell>
            <TableCell align="right">Water</TableCell>
            <TableCell align="right">Chemicals</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: `${row.calories < 30 ? "red" : "white"}`,
                  color: `${row.calories < 30 ? "white" : "black"}`,
                }}
                align="right"
              >
                {row.calories}
              </TableCell>
              <TableCell style={{
                  backgroundColor: `${row.fat < 30 ? "red" : "white"}`,
                  color: `${row.fat < 30 ? "white" : "black"}`,
                }} align="right">{row.fat}</TableCell>
              <TableCell style={{
                  backgroundColor: `${row.carbs < 30 ? "red" : "white"}`,
                  color: `${row.carbs < 30 ? "white" : "black"}`,
                }} align="right">{row.carbs}</TableCell>
              <TableCell style={{
                  backgroundColor: `${row.protein < 30 ? "red" : "white"}`,
                  color: `${row.protein < 30 ? "white" : "black"}`,
                }} align="right">{row.protein}</TableCell>
              <TableCell style={{
                  backgroundColor: `${row.protein < 30 ? "red" : "white"}`,
                  color: `${row.protein < 30 ? "white" : "black"}`,
                }} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
