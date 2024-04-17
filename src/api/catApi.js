import axios from "@/plugins/axios";

const CatAPI = {
  getCat(data) {
    // ?limit=1
    return axios.get("https://api.thecatapi.com/v1/images/search", {
      params: data,
    });
  },
};

export default CatAPI;
