import React from 'react';
import './settings.css';
import { Sidebar } from '../../sidebar/sidebar';

export function Settings(props) {
    return (
        <>
        <div className='user-sec'>
          <Sidebar/>
        <div className="container"> 

        {/* create container1 inside main container */}
        <div class="container1">
          {/* create card1 componant in container1 */}
          <div className="card1">
                <h2> Settings</h2><br></br><br></br>
                <div className="content">
                    <p><strong>Account</strong></p>
                    <a href='#'>Google Account</a><br></br><br></br>
                    <a href='#'>Microsoft Account</a><br></br><br></br>
                    <a href='#'>FDFS Account</a><br></br><br></br><br></br>
                    {/* <ul>
                        <li>Google Account</li>
                        <li>Microsoft Account</li>
                        <li>FDFS Account</li>
                    </ul> */}

                    <p><strong>Preferences</strong></p>
                    <a href='#'>User Interface</a><br></br><br></br><br></br>

                    {/* <ul>
                        <li>User Interface</li>
                    </ul> */}

                    <p><strong>Security</strong></p>
                    <a href='#'>Change password</a><br></br><br></br>
                    <a href='#'>Login verification</a><br></br><br></br>
                    <a href='#'>Devices</a><br></br><br></br><br></br>
                    {/* <ul>
                        <li>Change password</li>
                        <li>Login verification</li>
                        <li>Devices</li>
                    </ul> */}
                </div>
            </div>
        </div>

        {/* create container2 inside main container */}
        <div class="container2">
          {/* create card2 componant in container2 */}
          <div className="card2">
                <h2>Change Password</h2>
                <div className="content">
                    {/* Add your password change form here */}
                    {/* Example: Current password, New password, Confirm password */}
                </div>
            </div>

          
        </div>
      </div>
      </div> 
      </>





















































        
    );
}

export default Settings;   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 
