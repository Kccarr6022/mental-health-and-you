import React from "react";
import Link from "next/link";

function ClientDescription() {
  return (
    <>
      <div className="flex flex-col text-slate-100 border-4 border-secondary-green rounded-xl p-6 md:max-w-[75%]">
        <span className="font-bold">FirstName LastName</span>
        <div>
          <span className="font-bold">Age: </span>
          (age)
        </div>
        <div>
          <span className="font-bold">Gender </span>
          (Gender)
        </div>
        <div>
          <span className="font-bold">Brief Description: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="flex justify-center px-4 py-2 mb-4 rounded-b-lg bg-secondary-green text-slate-100">
        <Link href="/Client">VIEW PROFILE</Link>
      </div>
    </>
  );
}

export default ClientDescription;
