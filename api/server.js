//server.js
import Axios from 'axios'

// ==> 私有Axios实例，用作拦截器作用
const linkUrl = 'zbt'
const server = Axios.create({})

server.interceptors.request.use(config => {
    if (localStorage.Bearer) {
        config.headers.AccountAuthorization = 'Bearer ' + localStorage.Bearer
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 设置拦截器
server
    .interceptors
    .response
    .use(res => {
        let data = res.data
        // 统一判断，如果请求成功返回数据
        if (data.code && (data.code === '0' || data.code === 200)) {
            return data
            // token过期
        } else if (data.code === 401) {
            localStorage.account = 'null'
            // localStorage.Bearer = ''
            loginAgain()
            return data
        } else {
            return Promise.reject(data)
        }
    }, err => {
        // alert('连接失败，请检查您的网络。')
        return Promise.reject(err)
    })

export default server