// import React, { createContext, useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const SocketContext = createContext();

// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const newSocket = io('http://localhost:8080');
//     setSocket(newSocket);

//     return () => newSocket.close();
//   }, []);

//   return (
//     <SocketContext.Provider value={socket}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export default SocketContext;
import React, { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]); // Store messages here

  useEffect(() => {
    const newSocket = io('http://localhost:8080');
    setSocket(newSocket);

    newSocket.on("recieveMessage", (data) => {
      setMessages(currentMessages => [...currentMessages, data]);
      // Now all components using SocketContext can access these messages
    });

    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={{ socket, messages }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
