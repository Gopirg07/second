import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import Base from "../Core/Base";

export default function Teachers() {
  const { teachersdata,setTeachersdata} = AppState();
    const history=useHistory();
    console.log(teachersdata);

    function deleteUser(idx){
    const alteredlist=teachersdata.filter((per)=>per.id!==idx);
    console.log("deleted :",alteredlist);
    setTeachersdata(alteredlist)
    }

    return (
      <Base title="Teachers Datas">
        <div>
          <Button variant='contained' onClick={() => history.push("/teacher/addteacher")}>Add Teacher</Button>
        </div>
        <div className="user-content">
        {teachersdata.map((user, idx) => (
          <div key={idx} className="user-card">
            <h1>{user.name}</h1>
            <p>{user.batch}</p>
            <p>{user.email}</p>
            <p>{user.experience}</p>
            <div className="btn-group">
              <button
               onClick={()=>history.push(`/teacheredit/${user.id}`)}
                className="btn edit-btn"
              >
                Edit
              </button>
  
              <button
                className="btn view-btn"
                onClick={() => history.push(`/teacher/${idx}`)}
              >
                View
              </button>
  
              <button
                className="btn del-btn"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>    
          </div>
        ))}
        </div>
      </Base>
    );
}
