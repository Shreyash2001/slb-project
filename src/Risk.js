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
          <p>{d.date.toLocaleDateString()}</p>
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
