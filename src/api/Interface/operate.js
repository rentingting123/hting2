import axios from "../axios"

//行业列表
export function industryPage(params){
    return axios.get('/industry/page',{params});
}
//行业-添加
export function industryAdd(data){
    return axios.post('/industry',data);
}
//行业-修改
export function industryEdit(data){
    return axios.put('/industry',data);
}
//行业-删除
export function industryDelete(id){
    return axios.delete(`/industry/${id}`,);
}