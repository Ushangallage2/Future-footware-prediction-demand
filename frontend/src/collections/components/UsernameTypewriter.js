// import React from 'react';
// import Typewriter from 'react-typewriter-effect';
// import { useUser } from './UserContext';

// const UsernameTypewriter = () => {
//   const { currentUser } = useUser();
//   console.log("its here toooooo!")
//   console.log(currentUser)

//   return (
//     <div className="username-typewriter">
//       <Typewriter
//         options={{
//           strings: [currentUser?.username || ''],
//           autoStart: true,
//           loop: false,
//         }}
//       />
//     </div>
//   );
// };

// export default UsernameTypewriter;
// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import { useUser } from './UserContext';
// import './usernameTypewriter.css';

// const UsernameTypewriter = () => {
//   const { currentUser } = useUser();

//   return (
//     <div className="username-typewriter" >
//       <Typewriter
//         words={[currentUser?.username || '']}
//         loop={true}
//         cursor={true}
//         cursorStyle='_'
//         typeSpeed={50}
//         deleteSpeed={50}
//         delaySpeed={1000}
        
//       />
//     </div>
//   );
// };

// export default UsernameTypewriter;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useUser } from './UserContext';
import './usernameTypewriter.css';




const UsernameTypewriter = ({ onClick }) => {
  const { currentUser } = useUser();

  return (
    <a href="./userprofile" onClick={onClick}>
      <div className='typeWriter-container'>
        <div className="username-typewriter">
          <Typewriter
          words={[currentUser?.username || '']}
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
