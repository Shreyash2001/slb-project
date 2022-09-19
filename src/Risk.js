import React from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import "./Risk.css";

const data = [
  {
    name: "Risk 1",
    date: new Date(),
    status: "Not Resolved",
    btnLink: "/",
  },
  {
    name: "Risk 2",
    date: new Date(),
    status: "Not Resolved",
    btnLink: "/",
  },
  {
    name: "Risk 3",
    date: new Date(),
    status: "Not Resolved",
    btnLink: "/",
  },
  {
    name: "Risk 4",
    date: new Date(),
    status: "Resolved",
    btnLink: "/",
  },
  {
    name: "Risk 5",
    date: new Date(),
    status: "Resolved",
    btnLink: "/",
  },
];

function Risk() {
  return (
    <div
      style={{
        padding: "3rem",
        width: "100%",
      }}
    >
        <h1 style={{margin:"-2rem 0rem 2rem 0rem"}}>Risk Register</h1>
        
        <div
          
          style={{
            display: "flex",
            width: "100%",
            // justifyContent: "space-between",
            alignItems: "center",
            padding: "0rem 0.5rem",
            margin: "-0.5rem 0rem",
          }}
        >
          <p>Risk Name</p>
          <p style={{marginLeft:'10rem'}}>Date</p>
          <p style={{marginLeft:'15rem'}}>Status</p>
          <p>
              
          </p>
          
        </div>
      {data.map((d, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow:
              "0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)",
            padding: "1rem",
            margin: "0.3rem",
          }}
        >
          <p>{d.name}</p>
          <p>{d?.date.toLocaleDateString()}</p>
          <Chip
            color={checker(d.status) ? "success" : "error"}
            label={d.status}
          ></Chip>
          {!checker(d.status) ? (
            <Button className="button">Resolve</Button>
          ) : (
            <Button disabled={true} className="disabled button">
              Resolve
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Risk;

const checker = (status) => {
  if (status === "Not Resolved") return false;

  return true;
};
