import axios from "axios";

import { SERVER_ADDRESS } from "../configuration/Constants.json";

export const GetDatas = (url) => {
  return axios.get(`${SERVER_ADDRESS}${url}`);
};

export const PostContactUs = (contact) => {
  const URL = `${SERVER_ADDRESS}/contact-us`;
  return axios.post(URL, contact);
};

export const GetProductsPage = (url) => {
  return axios.get(`http://localhost:8000/api${url}`);
};

