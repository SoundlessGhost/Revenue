/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();
  if (loading) {
    return <p>loading ...</p>;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
};

export default PrivateRoute;
