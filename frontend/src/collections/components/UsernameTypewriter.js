// import React from 'react';
// import '../../App.css';
// import { Typewriter } from 'react-simple-typewriter';
// import { useUser } from './UserContext';
// import './usernameTypewriter.css';



// const UsernameTypewriter = ({ onClick }) => {
//   const { currentUser } = useUser();

//   return (
//     <a href="./userprofile" onClick={onClick}>
//       <div className='typeWriter-container'>
//         <div className="username-typewriter">
//           <Typewriter
//           words={[currentUser?.username || '']}
//           loop={true}
//           cursor={true}
//           cursorStyle='_'
//           typeSpeed={50}
//           deleteSpeed={50}
//           delaySpeed={1000}
//         />
//         </div>
//       </div>
//     </a>
//   );
// };

// export default UsernameTypewriter;
import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Typewriter } from 'react-simple-typewriter';
import { useUser } from './UserContext';
import './usernameTypewriter.css';

const UsernameTypewriter = ({ onClick }) => {
  const { currentUser } = useUser();
  const [username, setUsername] = useState(currentUser?.username || '');

  useEffect(() => {
    setUsername(currentUser?.username || '');
  }, [currentUser?.username]); // Dependency array contains currentUser.username

  return (
    <a href="./backgroundVideoPage" onClick={onClick}>
      <div className='typeWriter-container'>
        <div className="username-typewriter">
          <Typewriter
            words={[username]}
            loop={true}
            cursor={true}
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </a>
  );
};

export default UsernameTypewriter;
