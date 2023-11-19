import React from "react";
import { IoRestaurant } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex p-4 pl-6 shadow-md">
      <IoRestaurant className="text-3xl" />
      <p className="ml-2 font-semibold text-2xl">Resto Book</p>
    </div>
  );
};

export default Header;
