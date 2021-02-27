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
//5 岗位-添加
export function jobsAdd(data){
    return axios.post('/jobs',data);
}
//6 岗位-修改
export function jobsEdit(data){
    return axios.put('/jobs',data);
}
//7 岗位-删除
export function jobsDelete(id){
    return axios.delete(`/jobs/${id}`,);
}
//8 岗位-列表
export function jobsPage(params){
    return axios.get('/jobs/page',{params});
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
// 17 人员禁用-启用
export function sysBackerStatus(id){
    return axios.delete(`/sys-backer/status/${id}`);
}
// 18 回款记录 添加
export function receivableAdd(data){
    return axios.post('/receivable',data);
}
// 14回款记录 修改
export function receivableEdit(data){
    return axios.put('/receivable',data);
}
// 20 回款记录 查询
export function receivablePage(params){
    return axios.get('/receivable/page',{params});
}
//  xx 回款记录-删除
export function receivableDelete(id){
    return axios.delete(`/receivable/${id}`);
}