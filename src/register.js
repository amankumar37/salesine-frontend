import React from "react";
import { useState } from "react";
import axios from "axios";

function Register(p) {
  function Set() {
    p.register(false);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    axios
      .post("https://victorious-pink-turkey.cyclic.cloud/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        p.register(false);
      })
      .catch((err) => {
        console.log("There is an error in registering the user in the client side ", err);
      });
  }

  return (
    <div>
      <h1 className="text-slate-800 text-3xl my-4">Enter your details</h1>
      <form className="my-0.5 flex flex-col" method="POST">
        <label htmlFor="name" className="my-0.5 text-slate-700 text-xl">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter Full Name"
          className="px-3 my-0.5 rounded-xl h-9 font-bold w-96"
          onChange={(e) => setName(e.target.value)} 
        />

        <label htmlFor="email" className="my-0.5 text-slate-700 text-xl">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          className="px-3 my-0.5 rounded-xl h-9 font-bold w-96"
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label htmlFor="password" className="my-0.5 text-slate-700 text-xl">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          className="px-3 my-0.5 rounded-xl h-9 font-bold w-96"
          onChange={(e) => setPassword(e.target.value)} 
        />

        <label forHtml="number" className= " my-0.5 text-slate-700 text-xl" >Contact Number</label>
                               <input name="number"  type="text" placeholder="Enter number" className= " px-3 my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="one" className= " my-0.5 text-slate-700 text-xl" >Enter Desired Postion</label>
                               <input name="one"  type="text" placeholder="Enter position" className= "px-3  my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="two" className= " my-0.5 text-slate-700 text-xl" >Availaibility</label>
                               <input name="two"  type="text" placeholder="Enter YES if available onsite otherwise NO" className= "px-3  my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="three" className= " my-0.5 text-slate-700 text-xl" >Work Authorization</label>
                               <input name="three"  type="text" placeholder="Work Authorization" className= " px-3 my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="four" className= " my-0.5 text-slate-700 text-xl" >Expected CTC</label>
                               <input name="four"  type="text" placeholder="Enter Amount in rupees" className= " px-3 my-0.5 rounded-xl h-9 font-bold w-96" />

        <button
          className="w-32 my-7 shadow bg-purple-500 hover:bg-purple-400 active:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={registerUser}
        >
          Register
        </button>
      </form>

      <h1 className="my-5">
        Already a user?{" "}
        <span className="my-0.5 text-purple-700 cursor-pointer font-bold" onClick={Set}>
          Sign In
        </span>{" "}
      </h1>
    </div>
  );
}

export default Register;
