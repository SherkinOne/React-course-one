import React from "react";
import Add from "./add"

export default function AddPage(){
    return (
    <div className="bg-green-100 h-screen">
    <h1 className="sm:text-5xl text-2xl font-medium title-font mb-1 text-gray-900 pt-1">
      Create New Record
    </h1>
    <Add />
    </div>
    )
  }