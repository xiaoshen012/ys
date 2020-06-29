import axios from "axios"
//创建一个axios实例
const Server =axios.create({
    baseURL:"",
    timeout:3000
})
//定义请求拦截器，请求发送出去，还未到达服务端的时候触发
Server.interceptors.request.use(function(config){
    // console.log(config);/
    return config
},function(error){
    return Promise.reject(error)
})
//定义响应拦截器，服务端返回，但是还未到达组件的时候
Server.interceptors.response.use(function(response){
    // console.log(response)
    if(response.status == 200){
        
        return response.data.data;
        
    }
},function(error){

    return Promise.reject(error)
})
Server.interceptors.request
export default Server