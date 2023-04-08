import React from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";

export default function TeachersDetails() {
  const { teachersdata } = AppState();
  const { id } = useParams();
  const person = teachersdata[id];
  return (
    <BaseApp title={"UserDetails"}>
      <div className="user-content">
        <div className="user-card">
          <h1>{person.name}</h1>
          <p>Batch : {person.batch}</p>
          <p>Email : {person.email}</p>
          <p>Exp : {person.experience}</p>
        </div>
      </div>
    </BaseApp>
  );
}
