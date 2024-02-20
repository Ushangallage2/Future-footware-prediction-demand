import React from 'react'
import * as Components from './Components';
import logo from '../../sidebar/fdfs.png';
import shoe05 from '../../pages/Shoe_Images/shoe05.png';

export function Testing(props) {
        return (
            <Components.Page>
                <div className='welcome'>
                <p className='intromsg'>Charting the future of footware through <br></br>AI-driven deman prediction and model<br></br>forecasting</p>
                <img src={shoe05} alt="pic1" className='loginShoe'/>
                </div>
                <Components.Container>
                <img className= 'logopic' src={logo} alt = "logo" />
                <Components.Form>
                    <Components.Input type='email' placeholder='Username' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='/userprofile'>Forgot password?</Components.Anchor>
                    <Components.Button>Login</Components.Button>
                </Components.Form>
                
            </Components.Container>
            </Components.Page>
        )
}
export default Testing;