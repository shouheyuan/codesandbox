import CatAPI from "./catApi";
import DogAPI from "./dogApi";
import jsonplaceholderAPI from "./jsonplaceholderApi";

const API = {
  cat: CatAPI,
  dog: DogAPI,
  jsonplaceholder: jsonplaceholderAPI,
};

export default API;
