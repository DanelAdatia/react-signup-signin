import axios from "axios";

export const getDetails = async () => {
  return await axios.get(`${process.env.REACT_APP_API}`);
};

export const sendDetails = async (details) => {
  return await axios.post(`${process.env.REACT_APP_API}`, details);
};

export const removeDetails = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_API}/${id}`);
};

export const updateDetails = async (id, details) => {
  return await axios.put(`${process.env.REACT_APP_API}/${id}`, details);
};
