import axios from "@/plugins/axios";

const DogAPI = {
  getDog() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
};

export default DogAPI;
