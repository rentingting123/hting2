import { axiosPostQs } from "../axios"


export function goLogin(data){
    return axiosPostQs('/login',data);
}
