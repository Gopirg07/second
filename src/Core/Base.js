import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Base({title,children}) {
  const history=useHistory()
  return (
    <div>
      <div>
        <div className="base-nav-styles">
          <span>
          <Button className="nav-buttons" variant="contained" onClick={()=>history.push(`/`)}>
            Home
          </Button>
          </span> 
        </div>
        <div className="title"> {title} </div>
      </div>

      
      <div className="childred">
          {children}
          <br/>
        <footer>
          contact
          <div>email : gopi.rg07@gmail.com</div>
          <div>Phone : 908042180</div>
        </footer>
      </div>
    </div>
  );
}
