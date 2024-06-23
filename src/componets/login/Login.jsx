import React, { useState } from "react";
import "./Login.css";

import user from "../assets/user.png";
import email from "../assets/email.png";
import password from "../assets/password.png";

const Login = () => {

    const [action, setAction] = useState('Login');

  return (

    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==='Login'? <div></div>:  <div className="input">
            <img src={user} alt=""></img>
            <input type="text" name="" id="" placeholder="username" />
        </div> }
 

        <div className="input">
            <img src={email} alt=""></img>
            <input type="email" name="" id="" placeholder="email" />
        </div>
        <div className="input">
            <img src={password} alt=""></img>
            <input type="password" name="" id="" placeholder="password"/>
        </div>
        {action=== 'Sign Up'?<div></div>:<div className="forgot-password">Forgot password?</div>}
      
        <div className="submit-container">
            <div className={action==='Login'? 'submit gray' : 'submit' } onClick={()=>setAction('Sign Up')}>Sign Up</div>
            <div className={action==='Sign Up'? 'submit gray' : 'submit' } onClick={()=>setAction('Login')}>Login</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
