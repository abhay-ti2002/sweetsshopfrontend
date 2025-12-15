import React, { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUsers } from "../utils/appSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(password);

  const handleLogin = async () => {
    try {
      
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      // Save token
      sessionStorage.setItem("token", res.data.token);
      
        
      //   dispatch(addUsers(res.data));
      // dispatch(addStatus(res.status));
      console.log(res);
      navigate("/sweets");
    } catch (error) {
      // navigate("/login");
      console.log("LoginPage", error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className="border-2 border-red border-solid p-12 box-border rounded-lg">
        <div>
          <div className="">
            <h1 className="pr-16 font-semibold text-3xl mobile:text-5xl mb-2 ">
              Login
            </h1>
            <p className="text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>

          <div className="flex flex-col  mt-8  gap-6 mobile:mt-28">
            <span>Email</span>
            <input
              className="h-11 w-80 p-3 -mt-4 bg-transparent outline outline-slate-700 rounded-md"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <span>Password</span>
            <input
              className="h-11 w-80 p-3 -mt-4 bg-transparent outline outline-slate-700 rounded-md"
              type="password"
              value={password}
              name=""
              id=""
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              className="btn btn-primary rounded-md bg-black h-10 w-80 text-white"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="mt-3">
            <p className="text-center">
              Don't have an account?
              <Link to="/resister">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
