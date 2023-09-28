import React from "react";

function NavBar(){
    

    return(
        <div className="">
            <nav className="flex bg-purple-700 justify-between ">
             <div className="font-extralight text-2xl text-white flex items-center cursor-pointer">Talent Connect </div>

            <ul className="  py-4 flex justify-end items-center space-x-8">
              <li className="text-white font-bold  cursor-pointer">WHAT WE DO</li>
              <li className="text-white font-bold cursor-pointer">BLOG</li>
              <li className="text-white font-bold cursor-pointer">PODCAST</li>
              <li className="text-white font-bold cursor-pointer">CAREERS</li>
              <li className="text-purple-700 font-extrabold cursor-pointer bag bg-white rounded-xl py-2 px-2">WORK WITH US</li>
            </ul>
            </nav>

            
               
        </div>
    )
}

export default NavBar;