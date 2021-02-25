import axios from "../axios"

export function goLogin(data){
    return axios.post('/login',data);
}
export function dictPage(){
    return axios.get('/dict/page');
}
