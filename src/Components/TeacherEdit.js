import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";

export default function TeacherEdit() {
  const { teachersdata, setTeachersdata } = AppState();
  const history = useHistory();
  const { id } = useParams();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [batch, setBatch] = useState("");

  const selectedUser = teachersdata.find((per) => per.id === id);
  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setExperience(selectedUser.experience);
    setBatch(selectedUser.batch);
  }, []);

  const Edit = () => {
    const EditedIndex = teachersdata.findIndex((per) => per.id === id);
    console.log(EditedIndex);

    const EditedUser = {
      id: idx,
      name,
      email,
      experience,
      batch,
    };
    console.log(EditedUser);

    teachersdata[EditedIndex] = EditedUser;
    setTeachersdata([...teachersdata]);

    history.push("/teachers");
  };

  return (
    <BaseApp title={"Edit Teacher"}>
      <div className="text-areas">
        <TextField
          id="outlined-basic"
          label="Id"
          variant="outlined"
          value={idx}
          onChange={(event) => setIdx(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="experience"
          variant="outlined"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="batch"
          variant="outlined"
          value={batch}
          onChange={(event) => setBatch(event.target.value)}
        />
        <Button id="addSubmit" variant="contained" onClick={Edit}>
          Submit
        </Button>
      </div>
    </BaseApp>
  );
}
