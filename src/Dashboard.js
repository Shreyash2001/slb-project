import React from "react";
import "./Dashboard.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

function Dashboard() {
    const data01 = [
        { name: 'Field Engineer', value: 288 },
        { name: 'Sampling Specialist', value: 456 },
        { name: 'Coring Specialist', value: 121 },
        { name: 'Capstan Specialist', value: 10 },
        { name: 'Operator', value: 278 },
      ];
      

  const [rig, setRig] = React.useState(0);

  const handleChange = (event) => {
    setRig(event.target.value);
  };
  
  
  const rigData = [{
      crew:56,
      material:'80%',
      risk:'10%'
  },{
      crew:98,
      material:'98%',
      risk:'7%'
  },
  {
      crew:89,
      material:'78%',
      risk:'3%'
  },{
      crew:101,
      material:'56%',
      risk:'14%'
  },{
      crew:90,
      material:'99%',
      risk:'9%'
  }]
  
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
                <MenuItem value={0}>A</MenuItem>
                <MenuItem value={1}>B</MenuItem>
                <MenuItem value={2}>C</MenuItem>
                <MenuItem value={3}>D</MenuItem>
                <MenuItem value={4}>E</MenuItem>
            </Select>
            </FormControl>
            )
        };
  
  const innerCards = (name,percentage) => {
      return (
          <div className="card">
              <div style={{paddingLeft:"10px"}}>
                  <h2 style={{color:"#000", marginBottom:"0px", fontSize:"20px"}}>{name}</h2>
              </div>
              <div style={{paddingLeft:"8px"}}>
                  <h1 style={{color:"#000", marginTop:"0px", fontSize:"40px"}}>{percentage}</h1>
              </div>
          </div>
      )
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#7FBCD2'];
  const pieChart = () => {
      return (
          <div className="pieChart">
              <div style={{position:"absolute", top:"0px", left:"20px"}}>
                      <h2>Roles</h2>
                </div>
              <div>
              <div>
                  <ResponsiveContainer width={340} height={346}>
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
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
              </div>
              </div>
          </div>
      )
  }
  
  const data = [
  {
    name: "Cement",
    rig1: 78,
    rig2: 42,
    rig3: 42,
    rig4: 91,
    rig5:23
  },
  {
    name: "Sand",
    rig1: 30,
    rig2: 98,
    rig3: 75,
    rig4:89,
    rig5:45
  },
  {
    name: "Water",
    rig1: 90,
    rig2: 80,
    rig3: 92,
     rig4:61,
    rig5:66
  },
  {
    name: "Chemicals",
    rig1: 80,
    rig2: 90,
    rig3: 70,
     rig4:81,
    rig5:45
  },
  {
    name: "Bricks",
    rig1: 89,
    rig2: 80,
    rig3: 81,
     rig4:56,
    rig5:100
  },
];
  
  const barGraph = () => {
      return (
          <div className="bargraph">
              <div style={{paddingTop:"10px", marginLeft:"10px"}}>
                  <h2>Material</h2>
              </div>
              <BarChart
                width={850}
                height={320}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rig1" fill="#FF7777" />
                <Bar dataKey="rig2" fill="#82ca9d" />
                <Bar dataKey="rig3" fill="#ffc658" />
                <Bar dataKey="rig4" fill="#6F38C5" />
                <Bar dataKey="rig5" fill="#ADDDD0" />
                </BarChart>
          </div>
      )
  }

    return (
        <div className="container">
            {/* <h1 style={{margin:"0rem 0rem 2rem 0rem"}}>Dashboard</h1> */}
            <div className="rig_data">
                <div className="upper_name">
                    <div>
                        <h2>Rig Data</h2>
                    </div>
                    <div>
                        {selectRig()}
                    </div>
                </div>
                <div className="innerCards_container">
                    {innerCards("Crew", rigData[rig].crew)}
                    {innerCards("Material", rigData[rig].material)}
                    {innerCards("Risk",rigData[rig].risk)}
                </div>
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