import { Outlet , Navigate } from "react-router-dom";

const PrivateRoutes = () => {

// let auth = {'token': false}
// console.log('Auth Token:', auth.token);

// return (

//     auth.token ? <Outlet/>  :<Navigate to ="/loginPage " />       
// )

const authToken = localStorage.getItem('token');
console.log("JWT here")
console.log(authToken)
const isAuthenticated = authToken !== null;


return isAuthenticated ? <Outlet/> : <Navigate to="/loginPage" />;





}


export {PrivateRoutes};


