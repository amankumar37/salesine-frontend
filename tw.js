import React from "react";
import user from "./user.png"

function Demo(){
       return(
           <div>
              <nav className="bg-purple-700 text-white flex ">
                     <span className="font-bold text-2xl flex items-center mx-3">Phone Khareedo</span>
                     <ul className="px-28 py-4 flex justify-end space-x-11">
                     <li className="cursor-pointer">Home</li>
                     <li className="cursor-pointer">About</li>
                     <li className="cursor-pointer">Category</li>
                     <li className="cursor-pointer">Sort</li>
                     </ul>
              </nav>
              <main className="main bg-fuchsia-200 flex   ">
                     <div className="main py-40 pl-9">
                     <div className="text-6xl text-white">The best phones in the town</div>
                     
                     <p className="text-purple-500 ">Lorem ipsum dolor sit amet consectetutr adipiscicing elit. Sed corrutip option cumque animin error. Laudantium nesciunt sed quibusdam harum sequi iure accusastium.</p>
                     
                     <div className="buttons">
                            <button className="btn"> Buy Now</button>
                            <button className="btn"> Contact Us</button>
                            
                     </div>
                     </div>

                     <div className="flex justify-around" >
                            <img  src={user} className="w-1/3 h" />
                     </div>
              </main>
           </div>
       )
}

export default Demo;