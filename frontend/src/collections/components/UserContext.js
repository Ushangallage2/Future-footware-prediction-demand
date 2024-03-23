import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize currentUser from localStorage or set it to null
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Update localStorage when currentUser changes
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  const setUser = (user) => {
    setCurrentUser(user);
    console.log("User set:", user);
  };

  return (
    <UserContext.Provider value={{ currentUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(() => {
//     const storedUser = localStorage.getItem('currentUser');
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   const setUser = (user) => {
//     setCurrentUser(user);
//     localStorage.setItem('currentUser', JSON.stringify(user));
//   };

//   useEffect(() => {
//     // Optional: You may want to clear localStorage on logout or when needed
//     return () => {
//       localStorage.removeItem('currentUser');
//     };
//   }, []);

//   return (
//     <UserContext.Provider value={{ currentUser, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };

