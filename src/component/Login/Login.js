
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {  AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill} from "react-icons/ri";


export default function Login() {

  let getData= JSON.parse(localStorage.getItem("userDetails")) 
  console.log(getData , "i am from local") 

  
 

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    const newARR = getData.filter(x=> x.UserName === userName   && x.Password === password)
    console.log(newARR)
    if(newARR.length === 0){
      alert("user not found")
    }else{
      alert("you are logged in")
   
    }
   
      
  }

  
  function captUserName(e) {
    setUserName(e.target.value);
  }
  function capturePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
    <div className="main">
    <div className="form">
    <form >
      <h1>Login Page</h1>
      
      <div className="email">
      <label style={{fontSize:"2em"}}><AiOutlineUser/></label>
      <input
        type="text"
        placeholder="Your User Name"
        value={userName}
        onChange={captUserName}
      />
    
      </div>
      <div className="email">
      <label style={{fontSize:"2em"}}><RiLockPasswordFill/></label>
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={capturePassword}
      /> 
     <br/>
      
     
      </div>
     
      
       <br/>
      
      <input className="loginBtn" onClick={handleSubmit} type="button" value="SUBMIT" />
      <p >New User ? <Link to='/register'>Registration</Link> </p>
      </form>
    
      </div> 
      </div>
</>
  );
}

