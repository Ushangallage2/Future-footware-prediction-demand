// import ax from 'axios';

// const token = localStorage.getItem('token');

// const axios = ax.create = ({
//     baseURL: 'http://localhost:8080/',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// axios.interceptors.request.use(
//     (config) =>{
//         config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

// axios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

// export default axios;