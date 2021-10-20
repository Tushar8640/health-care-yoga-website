import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const {user,isLoading} = useAuth();
  if(isLoading){
    return <div class=" flex justify-center items-center align-middle h-screen">
    <div class="animate-spin rounded-full h-24 w-24 border-b-4 border-gray-900"></div>
  </div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
