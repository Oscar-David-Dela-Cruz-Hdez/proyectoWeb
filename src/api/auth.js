import axios from "axios";
const API='http://localhost:4000'
export const registerRequest=(user)=>axios.post(`${API}/usuarios`,user)
export const loginRequest=(user)=>axios.post(`${API}/auth/login`,user)
export const logoutRequest=()=>axios.post(`${API}/auth/logout`)