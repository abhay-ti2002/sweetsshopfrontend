import React from "react";
import { Link } from "react-router";

const Account = () => {
  return (
    <div className="relative inline-block z-40">
          <div className="dropdown dropdown-end">
            
        <div tabIndex={0} role="button" className="">
          <img className="w-6 h-6" src="../userimg.png" />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <Link>Admin Panel</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
