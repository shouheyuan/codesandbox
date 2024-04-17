import axios from "@/plugins/axios";

const jsonplaceholderAPI = {
  // 发送一篇文章
  sendArticle(data) {
    return axios.post("http://jsonplaceholder.typicode.com/posts", data);
  },
};

export default jsonplaceholderAPI;
