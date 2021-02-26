import axios from "../axios"


//1行业-添加
export function industryAdd(data){
    return axios.post('/industry',data);
}
//2行业-修改
export function industryEdit(data){
    return axios.put('/industry',data);
}
//3行业-删除
export function industryDelete(id){
    return axios.delete(`/industry/${id}`,);
}
//4行业列表
export function industryPage(params){
    return axios.get('/industry/page',{params});
}
// 13人员添加
export function sysBackerAdd(data){
    return axios.post('/sys-backer',data);
}
// 14人员修改
export function sysBackerEdit(data){
    return axios.put('/sys-backer',data);
}
// 15人员列表
export function sysBackerPage(params){
    return axios.get('/sys-backer/page',{params});
}
// 16 人员删除
export function sysBackerDelete(id){
    return axios.delete(`/sys-backer/${id}`);
}