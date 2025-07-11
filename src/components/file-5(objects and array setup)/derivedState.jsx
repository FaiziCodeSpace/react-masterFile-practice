import { useState } from "react"

function Students(){
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState('');

    function addStudent(){
        if(student!=''){
        setStudents([...students, student]);
        }
    }

    const studentNum = students.length;
    const lastStudent = students[students.length-1];
    const uniqueStudents = [...new Set(students)].length;


    return(
        <>
            <h1>Numbers of Students:{studentNum}</h1>
            <h1>Last Student:{lastStudent}</h1>
            <h1>Last Student:{uniqueStudents}</h1>
            <input type="text" onChange={(e)=>setStudent(e.target.value)} />
            <button onClick={()=>addStudent()}>Submit Student</button>
        </>
    )
}

export default Students;