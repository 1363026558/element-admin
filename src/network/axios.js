import axios from 'axios'
import qs from 'qs'

//axios默认配置
axios.defaults.baseURL = 'http://39.105.138.173:666/admin'
axios.defaults.timeout = 5000

//axios请求拦截
axios.interceptors.request.use(config => {
    //序列化请求数据
    config.data = qs.config.data
    //请求头设置
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    //m
})
