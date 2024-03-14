import { useContext } from "react";
import { userContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(userContext);
  return auth;
};

export default useAuth;
