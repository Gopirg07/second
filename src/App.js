import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Students from "./Components/Students";
import Teachers from "./Components/Teachers"; 
import AddTeacher from "./Components/AddTeacher";
import AddStudent from "./Components/AddStudent";
import StudentsDetails from "./Components/StudentsDetails";
import TeachersDetails from "./Components/TeachersDetails"; 
import StudentEdit from "./Components/StudentEdit";
import TeacherEdit from "./Components/TeacherEdit";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/teachers">
          <Teachers />
        </Route>

        <Route path="/students">
          <Students />
        </Route>

        <Route path="/teacher/addteacher">
          <AddTeacher />
        </Route>

        <Route path="/student/addstudent">
          <AddStudent />
        </Route>

        <Route path="/teacher/:id">
          <TeachersDetails />
        </Route>

        <Route path="/student/:id">
          <StudentsDetails />
        </Route>

        <Route path="/teacheredit/:id">
          <TeacherEdit />
        </Route>

        <Route path="/studentedit/:id"> 
          <StudentEdit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
