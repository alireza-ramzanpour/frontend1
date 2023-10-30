import { useSelector } from "react-redux";
import {students } from "./StudentsSlice";


function App() {
const stds = useSelector(students)

  return (
    <>
    
    <table border='1'>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>family</th>
      </tr>
      {
        stds.map((student) => (
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.family}</td>
          </tr>
        ))
      }
    </table>
    
    
    </>
  );
}

export default App;
