import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const List = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all sweets initially
  const fetchAllSweets = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(BASE_URL + "/view/sweets", {
        headers: {
          Authorization: `Bearer ${token}`, // send JWT
        },
        withCredentials: true,
      });
      setData(res?.data?.sweets || res?.data);
    } catch (error) {
      console.log("Error fetching sweets:", error);
    }
  };

  // Search sweets from API
  const fetchSearchSweets = async (query) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(BASE_URL + "/sweets/search", {
        params: { name: query },
        headers: {
          Authorization: `Bearer ${token}`, // send JWT
        },
        withCredentials: true,
      });
      setData(res?.data?.sweets || []);
    } catch (error) {
      console.log("Error searching sweets:", error);
    }
  };

  useEffect(() => {
    fetchAllSweets();
  }, []);

  // Handle input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      fetchAllSweets(); // if input empty, show all sweets
    } else {
      fetchSearchSweets(value); // fetch filtered data from API
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-black">Our Sweet Collection</h1>
        <p className="text-gray-600">
          Browse our delicious selection of candies and treats
        </p>
      </div>

      <div className="mb-6 flex justify-center text-black">
        <input
          type="search"
          placeholder="Search by name or category..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((sweet) => (
          <div
            key={sweet._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <img
              src={sweet.photo}
              alt={sweet.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{sweet.name}</h2>
              <p className="text-gray-500 mb-2">{sweet.category}</p>
              <p className="text-gray-700 text-sm mb-2">{sweet.discription}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">₹{sweet.price}</span>
                <span className="text-gray-600 text-sm">
                  Qty: {sweet.quantity}
                </span>
                <span>
                  <button className="bg-blue-500 p-1 rounded-md">
                    ADD CART
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
