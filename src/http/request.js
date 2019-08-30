import axios from 'axios'

export function request (config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: "localhost:8080",
        timeout: 5000
    })
    //2.请求拦截器
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err)
    })
    //3.响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    })

    return instance(config)
}