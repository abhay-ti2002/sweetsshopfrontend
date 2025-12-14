import React from "react";
import Navbar from "./NavBar";
import List from "./List";

const Sweets = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <List />
      </div>
    </div>
  );
};

export default Sweets;
