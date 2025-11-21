import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function PagenotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-20 ">
      <h2 className="text-4xl font-bold text-gray-700">Page not Found</h2>
       
      <Link className="border p-2.5  rounded-2xl font-medium" to={"/collection"}><FontAwesomeIcon icon={faArrowLeft} /> Back to Collection Page</Link>
    </div>
  );
}

export default PagenotFound;
