import React from "react";
import "./Dashboard.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dashboard() {
  const [rig, setRig] = React.useState('');

  const handleChange = (event) => {
    setRig(event.target.value);
  };
  
  const selectRig = () => {
      return (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Rig</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={rig}
                label="Rig"
                onChange={handleChange}
            >
                <MenuItem value={10}>A</MenuItem>
                <MenuItem value={20}>B</MenuItem>
                <MenuItem value={30}>C</MenuItem>
                <MenuItem value={40}>D</MenuItem>
                <MenuItem value={50}>E</MenuItem>
            </Select>
            </FormControl>
            )
        };
  
  const innerCards = (name,percentage) => {
      return (
          <div className="card">
              <div style={{paddingLeft:"20px"}}>
                  <h2 style={{color:"#fff", marginBottom:"0px"}}>{name}</h2>
              </div>
              <div style={{paddingLeft:"10px"}}>
                  <h1 style={{color:"#fff", marginTop:"0px", fontSize:"45px"}}>{percentage}%</h1>
              </div>
          </div>
      )
  };
  
  const pieChart = () => {
      return (
          <div className="pieChart">
              <div>
                  
              </div>
          </div>
      )
  }

    return (
        <div className="container">
            <div className="rig_data">
                <div className="upper_name">
                    <div>
                        <h1 style={{color:"gray"}}>Rig Data</h1>
                    </div>
                    <div>
                        {selectRig()}
                    </div>
                </div>
                <div className="innerCards_container">
                    {innerCards("Crew", 100)}
                    {innerCards("Material", 80)}
                    {innerCards("Risk",10)}
                </div>
            </div>
            <div>
                {pieChart()}
            </div>
            <div></div>
            <div></div>
        </div>
    )
};
export default Dashboard;