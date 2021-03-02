import {axiosPost, axiosGet, axiosPut, axiosDelete} from "../axios"


//1行业-添加
export function industryAdd(data){
    return axiosPost('/industry',data);
}
//2行业-修改
export function industryEdit(data){
    return axiosPut('/industry',data);
}
//3行业-删除
export function industryDelete(id){
    return axiosDelete(`/industry/${id}`);
}
//4行业列表
export function industryPage(params){
    return axiosGet('/industry/page',params);
}
//5 岗位-添加
export function jobsAdd(data){
    return axiosPost('/jobs',data);
}
//6 岗位-修改
export function jobsEdit(data){
    return axiosPut('/jobs',data);
}
//7 岗位-删除
export function jobsDelete(id){
    return axiosDelete(`/jobs/${id}`,);
}
//8 岗位-列表
export function jobsPage(params){
    return axiosGet('/jobs/page',{params});
}
// 13人员添加
export function sysBackerAdd(data){
    return axiosPost('/sys-backer',data);
}
// 14人员修改
export function sysBackerEdit(data){
    return axiosPut('/sys-backer',data);
}
// 15人员列表
export function sysBackerPage(params){
    return axiosGet('/sys-backer/page',{params});
}
// 16 人员删除
export function sysBackerDelete(id){
    return axiosDelete(`/sys-backer/${id}`);
}
// 17 人员禁用-启用
export function sysBackerStatus(id){
    return axiosDelete(`/sys-backer/status/${id}`);
}
// 18 回款记录 添加
export function receivableAdd(data){
    return axiosPost('/receivable',data);
}
// 14回款记录 修改
export function receivableEdit(data){
    return axiosPut('/receivable',data);
}
// 20 回款记录 查询
export function receivablePage(params){
    return axiosGet('/receivable/page',{params});
}
//  xx 回款记录-删除
export function receivableDelete(id){
    return axiosDelete(`/receivable/${id}`);
}