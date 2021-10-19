import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
   const { signInUsingGoogle } = useAuth();
   const [isLoading, setIsLoading] = useState(true);
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || "./home";

   const handleGoogleLogin = () => {
      setIsLoading(true);
      signInUsingGoogle()
         .then((result) => {
            history.push(redirect_uri);
         })
         .finally(() => setIsLoading(false));
   };
   return (
      <div>
         <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">
               Google Sign In
            </button>
         </div>
      </div>
   );
};

export default Login;
