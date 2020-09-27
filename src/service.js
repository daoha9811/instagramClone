import axios from "axios";

export const fetchChatByUserId = () => {
  const token = sessionStorage.getItem("token") || "";
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  return axios.get(`https://snowy-cuboid-vulcanodon.glitch.me/api/chat`);
};

export const getConverstationById = (id) => {
  const token = sessionStorage.getItem("token") || "";
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  return axios.get(
    `https://snowy-cuboid-vulcanodon.glitch.me/api/chat/converstation/${id}`
  );
};

export const createConverStation = (id) => {
  const token = sessionStorage.getItem("token") || "";
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  return axios.post(
    `https://snowy-cuboid-vulcanodon.glitch.me/api/createchat`,
    {
      toId: id,
    }
  );
};
