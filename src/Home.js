import { Avatar } from '@mui/material';
import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div>
        <div className="home_left">
            <Avatar style={{width:"130px", height:"130px", marginLeft:"20px"}} src="https://careers.slb.com/-/media/images/careers/early-careers/operations/early-careers-operations-combo.ashx" />
            <h1 style={{margin:"0px", fontSize:"23px"}}>Ahmed Manager</h1>
            <span style={{marginLeft:"20px", fontSize:"14px", fontWeight:"600"}}>Field Manager</span>
        </div>
        <div className="home_right">
            <div className="home">
                <img src="https://careers.slb.com/-/media/images/careers/home/home-combo-3.ashx" alt="" />
                <h1>Crew Planning</h1>
            </div>
            <div className="home">
                <img src="https://etimg.etb2bimg.com/photo/87207991.cms" alt="" />
                <h1>Material Planning</h1>
            </div>
            <div className="home">
                <img src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdXNpbmclMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <h1>Dashboard</h1>
            </div>
            <div className="home">
                <img src="https://www.safetyservicescompany.com/wp-content/uploads/2021/04/cpr-first-aid-aed-training.jpeg" alt="" />
                <h1>Potential Risk</h1>
            </div>
        </div>
    </div>
  )
}

export default Home