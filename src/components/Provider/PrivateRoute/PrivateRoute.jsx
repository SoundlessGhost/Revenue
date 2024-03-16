/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  console.log("children:", children);

  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center py-[400px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
