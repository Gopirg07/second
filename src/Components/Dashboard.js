import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Core/Base";

export default function Dashboard() {
    const history = useHistory();
  return (
    <Base title={"Welcome To Dashboard"}>
      <h1>What You Wanna See..?</h1>
      <div className="nav-styles">
        <span>
          <Button 
          className="nav-buttons"
          variant="contained"
          onClick={()=>history.push(`/teachers`)}
          >
            Teachers
          </Button>
        </span>
        <span>
          <Button 
          className="nav-buttons"
          variant="contained"
          onClick={()=>history.push(`/students`)}
          >
            Students
          </Button>
        </span>
      </div>
    </Base>
  );
}
