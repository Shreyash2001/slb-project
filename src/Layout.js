import React from "react";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "./Layout.css";

function Layout({ child }) {
  const url = window.location.hash.split("/")[1];
//   console.log(window.location.hash.split("/")[1].length);
  const history = useHistory();
  const logout = () => {
    history.push("/login");
  };
  
  const gotoHome = () => {
      history.push("/");
  }
  const gotoCrew = () => {
      history.push("/crew");
  }
  const gotoMaterial = () => {
      history.push("/material");
  }
  const gotoDashboard = () => {
      history.push("/dashboard");
  }
  const gotoRisk = () => {
      history.push("/risk");
  }
  
  return (
    <div style={{ display: "flex" }}>
      <div className="home_left">
        <Avatar
          style={{
            width: "130px",
            height: "130px",
            marginLeft: "20px",
            color: "#fff",
          }}
          src="https://careers.slb.com/-/media/images/careers/early-careers/operations/early-careers-operations-combo.ashx"
        />
        <h1 style={{ margin: "0px", fontSize: "23px", color: "#fff" }}>
          Ahmad Manager
        </h1>
        <span
          style={{
            marginLeft: "35px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Field Manager
        </span>
        <div>
            {
                url.length !== 0 
                &&
                (
                <div className="buttons">
                    <Button onClick={gotoHome}>Home</Button>
                        {
                        url === "crew" 
                        ? 
                        <Button onClick={gotoMaterial}>Material Planning</Button>
                        : 
                        <Button onClick={gotoCrew}>Crew Planning</Button>
                        }
                        
                        {
                        url === "dashboard" 
                        ? 
                        <Button onClick={gotoMaterial}>Material Planning</Button>
                        : 
                        <Button onClick={gotoDashboard}>Dashboard</Button>
                        }
                        
                        {
                        url !== "risk"
                        ?
                        <Button onClick={gotoRisk}>Risk Register</Button>
                        :
                        <Button onClick={gotoMaterial}>Material Planning</Button>
                        }
                </div>
            )} 
            
        </div>
        <div style={{ position: "absolute", bottom: "30px" }}>
          <Button
            style={{ backgroundColor:"#fff", color: "rgba(46, 86, 247, 0.649)", width: "200px" }}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </div>
      {child}
    </div>
  );
}

export default Layout;
