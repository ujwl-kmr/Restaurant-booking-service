import React from "react";
import { IoRestaurant } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black text-white justify-center align-middle p-8">
      <div className="flex justify-center align-middle">
        <IoRestaurant className="text-3xl" />
        <p className="ml-2 font-semibold text-2xl">Resto Book</p>
      </div>
      <p className="text-center my-3">
        Resto Book: Your ultimate destination for reserving top-notch dining
        experiences right in your neighborhood.
      </p>
      <div className="flex justify-center align-middle">
        <p className="mr-5">Name: Ujjawal Kumar</p>
        <p>Date: 19/11/2023</p>
      </div>
    </div>
  );
};

export default Footer;
