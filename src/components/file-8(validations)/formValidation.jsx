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
        <form>
            <input type="text" onChange={ValidateName} placeholder="Enter Your Username" />
            <span style={{color:"red"}}>{nameErr}</span><br />

            <input type="text" onChange={ValidatePass} placeholder="Enter Your Password" />
            <span style={{color:"red"}}>{passErr}</span>

            <br /><br />
            <button>Sign In</button>    
        </form>    
    </>)
}