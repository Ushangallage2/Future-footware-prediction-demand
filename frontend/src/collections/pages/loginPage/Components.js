import styled from 'styled-components';

export const Page = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(270deg, #002952 5%, #ff4076c6 50%, #002952 85%);

`;

export const Container = styled.div`
background-color: #3673c318;
border-radius: 10px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.10);
position:absolute;
top: 25%;
left: 60%;
overflow: hidden;
width: 500px;
// max-width: 100%;
// max-height: 50%;
height: 350px;
`;

// sign in pettiya
export const Form = styled.form`
display: flex;
align-items: center;
// justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

// Titles tika (Login/signup)
export const Title = styled.h1`
// font-weight: bold;
font-weight:lighter;
font-size: 20px;
margin: 0;
text-align: left;
`;

// Form eke fill karana kotuwa
export const Input = styled.input`
background-color: #0b4075ab;
// border: none;
padding: 12px 15px;
border-radius: 25px;
border: solid #ff39b0e7;
margin: 8px 0;
width: 100%;
`;

// sign in button eka
export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #fff;
   background-color: #fff;
   color: #132475;
   font-size: 14px;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-weight: 800;
   padding: 8px 40px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: 0.3s ease;
   &:active{
       transform: scale(0.9);
   }
   &:focus {
       outline: none;
   }
   &:hover{
    transform: scale(1.03)
    }
`;

// Forgot password eka
export const Anchor = styled.a`
color: #fff;
font-size: 14px;

font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration: none;
margin-top: 10px;
margin-bottom: 30px;
transition: 0.3s ease;
&:hover{
    transform: scale(1.03)
}
&:active{
    transform: scale(0.95);
}
`;