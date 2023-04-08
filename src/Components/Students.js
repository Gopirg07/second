import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import Base from "../Core/Base";

export default function Students() {
  const { studentdata,setStudentdata } = AppState();
  const history = useHistory();
  console.log(studentdata);



  function deleteUser(idx){
    const alteredlist=studentdata.filter((per)=>per.id!==idx);
    console.log("deleted :",alteredlist)
    setStudentdata(alteredlist)
  }
  return (
    <Base title="Student Datas">
      <div>
        <Button
          variant="contained"
          onClick={() => history.push("/student/addstudent")}
        >
          Add Student
        </Button>
      </div>
      <div className="user-content">
        {studentdata.map((user, idx) => (
          <div key={idx} className="user-card">
            <h1>{user.name}</h1>
            <p>{user.batch}</p>
            <p>{user.email}</p>
            <p>{user.experience}</p>
            <div className="btn-group">
              <button
                onClick={() => history.push(`/studentedit/${user.id}`)}
                className="btn edit-btn"
              >
                Edit
              </button>

              <button
                className="btn view-btn"
                onClick={() => history.push(`/student/${idx}`)}
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
