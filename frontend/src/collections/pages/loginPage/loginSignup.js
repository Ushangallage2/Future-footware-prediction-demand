import React,{ useState} from 'react';
import'./loginSignup.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';


const LoginSignup = () => {
    const [action ,setAction] = useState("Sign Up")
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>

            </div>
            <div className='inputs'>
                {action ==="Login"? <div></div>: <div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='name' />
                </div>}
               
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='email' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='password' />
                </div>
            </div>
            <div className="forget-password">Lost password <span>Click Here!</span></div>
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
    );
};

export default LoginSignup;