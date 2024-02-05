/** @format */

import { format } from "date-fns";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-6 px-5">
      <p className="text-gray-400 text-xs font-bold opacity-75">
        &copy; {format(new Date(), " yyyy 'Copyright JP Barber'")}
      </p>
    </footer>
  );
};

export default Footer;
