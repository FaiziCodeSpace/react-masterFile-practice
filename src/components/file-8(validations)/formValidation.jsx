import { useState } from "react"

export default function FormValidation(){
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();

    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState();

    function ValidateName(e){
        console.log(e.target.value);
        if(e.target.value.length>5){
            setNameErr('The Username should be shorter than 5 characters');
        }else{
            setNameErr('');
        }
    }

    function ValidatePass(e){
        console.log(e.target.value);
        const regex = /^[A-Za-z0-9]*$/;
        if(regex.test(e.target.value)){
            setPassErr();
        }else{
            setPassErr('Only Numbers and Alphabets');
        }
    }

    return(<>
    <div className="form-wrapper">
        <form className="validation-Form">
            <input className={nameErr? "invalid": ""} type="text" onChange={ValidateName} placeholder="Enter Your Username" />
            <p style={{color:"red"}}>{nameErr}</p><br />

            <input className={passErr? "invalid": ""} type="text" onChange={ValidatePass} placeholder="Enter Your Password" />
            <p style={{color:"red"}}>{passErr}</p>

            <br /><br />
            <button disabled={nameErr || passErr}>Sign In</button>    
        </form>
    </div>    
    </>)
}