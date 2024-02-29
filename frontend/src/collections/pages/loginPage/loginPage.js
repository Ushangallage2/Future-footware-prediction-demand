// import React, { useState } from 'react';
// import * as Components from './Components';
// import logo from '../../sidebar/fdfs.png';
// import shoe05 from '../../pages/Shoe_Images/shoe05.png';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const successSound = new Audio(require('./loginbutton.mp3'));
// const alertSound = new Audio(require('./alertsound.mp3'));

// export function Testing(props) {
//   const Navigate = useNavigate();
//   const [userName, setUserName] = useState('');
//   const [passWord, setPassWord] = useState('');
//   const [loginError, setLoginError] = useState(false);

//   const login = (e) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:8080/auth/login', {
//         userName,
//         passWord,
//       })
//       .then((res) => {
//         if (res.data.status === 'success') {
//           localStorage.setItem('token', res.data.user.token);
//           Navigate('/userprofile');
//           successSound.play().catch((error) => {
//             console.error('Error playing sound:', error);
//           });
//         } else if (res.data.status === 'fail') {
//           setLoginError(true);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const forgotPassword = () => {
//     alertSound.play().catch((error) => {
//       console.error('Error playing sound:', error);
//     });
//     alert('Contact the administration for password recovery.');
//   };

//   return (
//     <Components.Page>
//       <div className="welcome">
//         <p className="intromsg">
//           Charting the future of footware through <br></br>AI-driven demand
//           prediction and model<br></br>forecasting
//         </p>
//         <img src={shoe05} alt="pic1" className="loginShoe" />
//       </div>
//       <Components.Container>
//         <img className="logopic" src={logo} alt="logo" />
//         <Components.Form>
//           <Components.Input
//             type="email"
//             placeholder="Username"
//             onChange={(e) => {
//               setUserName(e.target.value);
//               setLoginError(false); // Reset login error when user starts typing
//             }}
//           />
//           <Components.Input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => {
//               setPassWord(e.target.value);
//               setLoginError(false); // Reset login error when user starts typing
//             }}
//           />
//           {loginError && (
//             <p style={{ color: 'red', textAlign: 'center' }}>
//               Username or password incorrect
//             </p>
//           )}
//           <Components.Anchor style={{ cursor: 'pointer' }} onClick={forgotPassword}>
//             Forgot password?
//           </Components.Anchor>
//           <Components.Button onClick={login}>Login</Components.Button>
//         </Components.Form>
//       </Components.Container>
//     </Components.Page>
//   );
// }
// export default Testing;



// import React, { useState } from 'react';
// import * as Components from './Components';
// import logo from '../../sidebar/fdfs.png';
// import shoe05 from '../../pages/Shoe_Images/shoe05.png';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const successSound = new Audio(require('./loginbutton.mp3'));
// const alertSound = new Audio(require('./alertsound.mp3'));

// export function Testing(props) {
//   const Navigate = useNavigate();
//   const [userName, setUserName] = useState('');
//   const [passWord, setPassWord] = useState('');
//   const [loginError, setLoginError] = useState(false);
//   const [failedAttempts, setFailedAttempts] = useState(0);
//   const maxAttempts = 5;

//   const login = (e) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:8080/auth/login', {
//         userName,
//         passWord,
//       })
//       .then((res) => {
//         if (res.data.status === 'success') {
//           localStorage.setItem('token', res.data.user.token);
//           Navigate('/userprofile');
//           successSound.play().catch((error) => {
//             console.error('Error playing sound:', error);
//           });
//         } else if (res.data.status === 'fail') {
//           setFailedAttempts((prevAttempts) => prevAttempts + 1);
//           setLoginError(true);

//           if (failedAttempts + 1 >= maxAttempts) {
//             // Lock the account in the database
//             axios.post('http://localhost:8080/auth/lockAccount', { userName });
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getErrorMessage = () => {
//     if (failedAttempts >= maxAttempts) {
//       return `You have reached the maximum number of attempts. Account is locked. Contact the administration.`;
//     } else {
//       const attemptsLeft = maxAttempts - failedAttempts;
//       return `Invalid username or password You have failed ${failedAttempts} attempts. ${attemptsLeft} attempts left.`;
//     }
//   };


//     const forgotPassword = () => {
//     alertSound.play().catch((error) => {
//       console.error('Error playing sound:', error);
//     });
//     alert('Contact the administration for password recovery.');
//   };

//   return (
//     <Components.Page>
//       <div className="welcome">
//         <p className="intromsg">
//           Charting the future of footware through <br></br>AI-driven demand
//           prediction and model<br></br>forecasting
//         </p>
//         <img src={shoe05} alt="pic1" className="loginShoe" />
//       </div>
//       <Components.Container>
//         <img className="logopic" src={logo} alt="logo" />
//         <Components.Form>
//           <Components.Input
//             type="email"
//             placeholder="Username"
//             onChange={(e) => {
//               setUserName(e.target.value);
//               setLoginError(false); // Reset login error when the user starts typing
//             }}
//           />
//           <Components.Input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => {
//               setPassWord(e.target.value);
//               setLoginError(false); // Reset login error when the user starts typing
//             }}
//           />
//           {loginError && (
//             <p style={{ color: 'red', textAlign: 'center' }}>
//               {getErrorMessage()}
//             </p>
//           )}
//           <Components.Anchor
//             style={{ cursor: 'pointer' }}
//             onClick={forgotPassword}
//           >
//             Forgot password?
//           </Components.Anchor>
//           <Components.Button onClick={login}>Login</Components.Button>
//         </Components.Form>
//       </Components.Container>
//     </Components.Page>
//   );
// }

// export default Testing;
// import React, { useState } from 'react';
// import * as Components from './Components';
// import logo from '../../sidebar/fdfs.png';
// import shoe05 from '../../pages/Shoe_Images/shoe05.png';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from './UserContext';

// const successSound = new Audio(require('./loginbutton.mp3'));
// const alertSound = new Audio(require('./alertsound.mp3'));

// export function Testing() {
//   const Navigate = useNavigate();
//   const [userName, setUserName] = useState('');
//   const [passWord, setPassWord] = useState('');
//   const [loginError, setLoginError] = useState({ message: '', attemptsLeft: 0 });

//   const login = (e) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:8080/auth/login', {
//         userName,
//         passWord,
//       })
//       .then((res) => {
//         if (res.data.status === 'success') {
//           localStorage.setItem('token', res.data.user.token);
//           Navigate('/userprofile');
//           successSound.play().catch((error) => {
//             console.error('Error playing sound:', error);
//           });
//         } else if (res.data.status === 'fail') {
//           setLoginError({
//             message: res.data.message,
//             attemptsLeft: res.data.attemptsLeft || 0,
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const forgotPassword = () => {
//     alertSound.play().catch((error) => {
//       console.error('Error playing sound:', error);
//     });
//     alert('Contact the administration for password recovery.');
//   };

//   return (
//     <Components.Page>
//       <div className="welcome">
//         <p className="intromsg">
//           Charting the future of footware through <br></br>AI-driven demand
//           prediction and model<br></br>forecasting
//         </p>
//         <img src={shoe05} alt="pic1" className="loginShoe" />
//       </div>
//       <Components.Container>
//         <img className="logopic" src={logo} alt="logo" />
//         <Components.Form>
//           <Components.Input
//             type="email"
//             placeholder="Username"
//             onChange={(e) => {
//               setUserName(e.target.value);
//               setLoginError({ message: '', attemptsLeft: 0 }); // Reset login error when user starts typing
//             }}
//           />
//           <Components.Input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => {
//               setPassWord(e.target.value);
//               setLoginError({ message: '', attemptsLeft: 0 }); // Reset login error when user starts typing
//             }}
//           />
//           {loginError.message && (
//             <p style={{ color: 'red', textAlign: 'center', marginLeft: '-10px' }}>
//               {loginError.message}{' '}
//               {loginError.attemptsLeft > 0 && `You have ${loginError.attemptsLeft} attempts left.`}
//             </p>
//           )}

//           <Components.Anchor style={{ cursor: 'pointer', marginLeft: '-10px' }} onClick={forgotPassword}>
//             Forgot password?
//           </Components.Anchor>
//           <Components.Button onClick={login}>Login</Components.Button>
//         </Components.Form>
//       </Components.Container>
//     </Components.Page>
//   );
// }

// export default Testing;

import React, { useState } from 'react';
import * as Components from './Components';
import logo from '../../sidebar/fdfs.png';
import shoe05 from '../../pages/Shoe_Images/shoe05.png';
import axios from '../../../intercepter';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/UserContext';
//import axios from 'axios'; 

const successSound = new Audio(require('./loginbutton.mp3'));
const alertSound = new Audio(require('./alertsound.mp3'));

export function Testing() {
  const Navigate = useNavigate();
  const { setUser } = useUser();
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [loginError, setLoginError] = useState({ message: '', attemptsLeft: 0 });

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/auth/login', {
        userName,
        passWord,
      })
      .then((res) => {
        if (res.data.status === 'success') {
          localStorage.setItem('token', res.data.user.token);

          // Set the user context after successful login
          setUser({ username: res.data.user.username });
          console.log("im inside login")
          console.log(res.data.user.username)

          Navigate('/userprofile');
          successSound.play().catch((error) => {
            console.error('Error playing sound:', error);
          });
        } else if (res.data.status === 'fail') {
          setLoginError({
            message: res.data.message,
            attemptsLeft: res.data.attemptsLeft || 0,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const forgotPassword = () => {
    alertSound.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
    alert('Contact the administration for password recovery.');
  };

  return (
    <Components.Page>
      <div className="welcome">
        <p className="intromsg">
          Charting the future of footware through <br></br>AI-driven demand
          prediction and model<br></br>forecasting
        </p>
        <img src={shoe05} alt="pic1" className="loginShoe" />
      </div>
      <Components.Container>
        <img className="logopic" src={logo} alt="logo" />
        <Components.Form>
          <Components.Input
            type="email"
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
              setLoginError({ message: '', attemptsLeft: 0 }); // Reset login error when user starts typing
            }}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassWord(e.target.value);
              setLoginError({ message: '', attemptsLeft: 0 }); // Reset login error when user starts typing
            }}
          />
          {loginError.message && (
            <p style={{ color: 'red', textAlign: 'center', marginLeft: '-10px' }}>
              {loginError.message}{' '}
              {loginError.attemptsLeft > 0 && `You have ${loginError.attemptsLeft} attempts left.`}
            </p>
          )}

          <Components.Anchor style={{ cursor: 'pointer', marginLeft: '-10px' }} onClick={forgotPassword}>
            Forgot password?
          </Components.Anchor>
          <Components.Button onClick={login}>Login</Components.Button>
        </Components.Form>
      </Components.Container>
    </Components.Page>
  );
}

export default Testing;
