import React from "react";

export function NavBar(props) {
  return (
    <div className="bg-black w-full">
      <img src={props.logo} className="py-6 pl-14 cursor-pointer"/>
    </div>
  );    
}
