import axios from "axios";
const REGISTER_URL = "http://localhost:8000/register/"
const LOGIN_URL = "http://localhost:8000/login/"
// const LOGOUT_URL = "http://localhost:8000/logout/"


export function register(User_Details) {
    return new Promise((resolve) =>
        axios.post(REGISTER_URL, User_Details).then((res) => resolve({ data: res.data }))
    );
}

export function login(User_Details) {
    // console.log(User_Details);
    return new Promise((resolve) =>
        axios.post(LOGIN_URL, User_Details).then((res) => resolve({ data: res.data }))
    );
}

// export function logout() {
//     return new Promise((resolve) =>
//         axios.post(LOGOUT_URL).then((res) => resolve({ data: res.data }))
//     );
// }
