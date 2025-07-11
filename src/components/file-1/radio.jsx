import { useState } from "react";   

function GenderProcess(){
    const [gender, setGender] = useState('Female');
    const [subject, setSubject] = useState('Computer');
    return(
        <div>
            <h1>Select your Gender</h1>

            <label htmlFor="male">Male</label>
            <input onChange={(e)=>{setGender(e.target.value)}} checked={gender=='Male'} type="radio" id="male" value={'Male'} name="gender"/>
            <br />
            <label htmlFor="female">Female</label>
            <input onChange={(e)=>{setGender(e.target.value)}} checked={gender=='Female'} type="radio" id="female" value={'Female'} name="gender"/>

            <h1>Your Gender is: {gender}</h1>

            <div>
                <h1>Select your fav Subject</h1>
                <select onChange={(e)=>setSubject(e.target.value)} defaultValue={'Computer'}>
                    <option value="Computer">Computer</option>
                    <option value="Science">Science</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Maths">Maths</option>
                </select>
                <h1>Your Favourite Sub: {subject}</h1>
            </div>
        </div>
    )
}

export default GenderProcess;