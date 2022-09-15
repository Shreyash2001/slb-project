import React from "react";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function Layout({ child }) {
  console.log(window.location.hash.split("/")[1]);
  const history = useHistory();
  const logout = () => {
    history.push("/login");
  };
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
        <div style={{ position: "absolute", bottom: "30px" }}>
          <Button
            style={{ border: "1px solid #fff", color: "#fff", width: "200px" }}
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
