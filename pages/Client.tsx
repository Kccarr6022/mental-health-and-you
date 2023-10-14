import ClientProfile from "@/components/ClientProfile";
import Navbar from "@/components/NavBar";
import React from "react";

function Client() {
  return (
    <div className="bg-primary-green">
      <Navbar />
      <div className="">
        <ClientProfile />
      </div>
    </div>
  );
}

export default Client;
