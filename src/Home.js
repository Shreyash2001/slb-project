import React from 'react';
import "./Home.css";
import {useHistory} from "react-router-dom"

function Home() {
    const history = useHistory();
    const gotoCrew = () => {    
        history.push("/crew")
    };
    const gotoMaterial = () => {
        history.push("/material")
    };
    const gotoDashboard = () => {
        history.push("/dashboard")
    };
    const gotoPotentialRisk = () => {
        history.push("/risk")
    };
  return (
    <div>
        <div className="home_right">
            <div onClick={gotoCrew} className="home">
                <img src="https://careers.slb.com/-/media/images/careers/home/home-combo-3.ashx" alt="" />
                <h1>Crew & Job Scheduling</h1>
            </div>
            <div onClick={gotoMaterial} className="home">
                <img src="https://etimg.etb2bimg.com/photo/87207991.cms" alt="" />
                <h1>Material Planning</h1>
            </div>
            <div onClick={gotoDashboard} className="home">
                <img src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdXNpbmclMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <h1>Dashboard</h1>
            </div>
            <div onClick={gotoPotentialRisk} className="home">
                <img src="https://www.safetyservicescompany.com/wp-content/uploads/2021/04/cpr-first-aid-aed-training.jpeg" alt="" />
                <h1>Risk Register</h1>
            </div>
        </div>
    </div>
  )
}

export default Home