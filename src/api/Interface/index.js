import axios from "../axios"

export function goLogin(data){
    return axios.post('/login',{data});
}