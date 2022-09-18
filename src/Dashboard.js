import React from "react";
import "./Dashboard.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
      

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
              <div style={{paddingLeft:"10px"}}>
                  <h2 style={{color:"#fff", marginBottom:"0px", fontSize:"20px"}}>{name}</h2>
              </div>
              <div style={{paddingLeft:"8px"}}>
                  <h1 style={{color:"#fff", marginTop:"0px", fontSize:"40px"}}>{percentage}%</h1>
              </div>
          </div>
      )
  };
  
  const pieChart = () => {
      return (
          <div className="pieChart">
              <div>
              <div>
                  <ResponsiveContainer width={380} height={346}>
                    <PieChart width={600} height={600}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
              </div>
              </div>
          </div>
      )
  }
  
  const barGraph = () => {
      return (
          <div className="bargraph">
              
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
            <div>
                {pieChart()}
            </div>
            <div>
                {barGraph()}
            </div>
        </div>
    )
};
export default Dashboard;