import React, { createContext, useContext, useState } from "react";
import { studentsData } from "../Datas/studentsData";
import { teachersData } from "../Datas/teachersData";
//1.create a context
const Appcontext = createContext();

export default function AppProvider({ children }) {
  const [studentdata, setStudentdata] = useState(studentsData);
  const [teachersdata,setTeachersdata] = useState(teachersData);
  return (
    //2.create provider subs model
    <Appcontext.Provider
      value={{ studentdata, setStudentdata, teachersdata, setTeachersdata }}
    >
      {children}
    </Appcontext.Provider>
    //3.use context
  );
}
export const AppState = () => {
  return useContext(Appcontext);
};
