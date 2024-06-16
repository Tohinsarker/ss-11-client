import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const logout = useAuth();
  axios.interceptors.response.use(
    (res) => {
        console.log('response success')
      return res;
    },
    async (error) => {
      console.log(error.response);
      if (error.response.status === 401 || error.response.status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error)
    }
  );

  // axios.interceptors.request

  return axiosSecure;
};

export default useAxiosSecure;
