// axios.js
import axios from "axios";

const DEFAULT_CONFIG = {
  baseURL: "http://your-api-base-url.com", // 默认的基本请求路径
  timeout: 10000, // 默认的请求超时时间
};

const instance = axios.create(DEFAULT_CONFIG);

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，可以在请求头中添加 token 等信息
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 封装的axios函数
function sendRequest(url, config = {}) {
  // 合并传入的 config 和默认的 config，传入的 config 优先级更高
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  return instance(url, mergedConfig);
}

// 添加 get 方法
sendRequest.get = function (url, config = {}) {
  return sendRequest(url, { ...config, method: "get" });
};

// 添加 post 方法
sendRequest.post = function (url, data = {}, config = {}) {
  return sendRequest(url, { ...config, method: "post", data });
};

export default sendRequest;
