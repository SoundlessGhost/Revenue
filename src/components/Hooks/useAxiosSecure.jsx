import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure, setAxiosSecure] = useState(null);

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8000",
    });

    axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    setAxiosSecure(axiosInstance);
  }, [logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
