import React, { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUsers } from "../utils/appSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Resister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(password);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/singup",
        {
          userName,
          email,
          password,
        },
        { withCredentials: true }
      );

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
              Sign up
            </h1>
          </div>

          <div className="flex flex-col  mt-8  gap-6 mobile:mt-28">
            <span>Name</span>
            <input
              className="h-11 w-80 p-3 -mt-4 bg-transparent outline outline-slate-700 rounded-md"
              type="text"
              value={userName}
              placeholder="User Name"
              onChange={(event) => setUserName(event.target.value)}
            />
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
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
