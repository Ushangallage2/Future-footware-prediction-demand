import React,{useState} from 'react'
import * as Components from './Components';
import logo from '../../sidebar/fdfs.png';
import shoe05 from '../../pages/Shoe_Images/shoe05.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Testing(props) {
    const Navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")

const login = (e) =>{

e.preventDefault();
axios.post('http://localhost:8080/auth/login', {
    userName,
    passWord
}).then((res)=>{
    if(res.data.status === 'success'){

      localStorage.setItem('token',res.data.user.token);
      Navigate('/userprofile');

    }
    
}).catch((err)=>{
    console.log(err)
})
console.log(userName,passWord);

}
      

        return (
            <Components.Page>
                <div className='welcome'>
                <p className='intromsg'>Charting the future of footware through <br></br>AI-driven deman prediction and model<br></br>forecasting</p>
                <img src={shoe05} alt="pic1" className='loginShoe'/>
                </div>
                <Components.Container>
                <img className= 'logopic' src={logo} alt = "logo" />
                <Components.Form>
                    <Components.Input type='email' placeholder='Username' onChange={(e)=>{setUserName(e.target.value)}}/>
                    <Components.Input type='password' placeholder='Password' onChange={(e)=>{setPassWord(e.target.value)}} />
                    <Components.Anchor href='/userprofile'>Forgot password?</Components.Anchor>
                    <Components.Button onClick={login}>Login</Components.Button>
                </Components.Form>
                
            </Components.Container>
            </Components.Page>
        )
}
export default Testing;