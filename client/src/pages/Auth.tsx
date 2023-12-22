import React, { useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import { 
  AuthVec,
  EmailSVG,
  CheckSVG,
  LockSVG,
  EditSVG
} from "@/assets/index";

import { 
  Input
} from "@/components/reusables/index";

const Auth = () => {
  const [IsNewUser, setIsNewUser] = useState(false) ;

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello") ;
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="h-full w-full flex flex-row justify-center items-center bg-[var(--hover)] shadow-2xl">

        <div className="w-11/12 h-5/6 backdrop-blur-3xl bg-[var(--primary)] rounded-xl shadow-2xl flex flex-row">
          <div className="right-img h-full w-3/5 flex flex-row justify-center">
            <img src={AuthVec} alt="Vector Image" className="h-full w-full object-contain p-2" />
          </div>

          <div className="left-form flex flex-col h-full w-2/5min-w-72 justify-center items-center p-4 rounded-xl gap-4">
            <h3 className="w-full">Welcome User</h3>
            <p className="w-full">Join our product and start creating value</p>

            {IsNewUser? 
            <form onSubmit={handleSubmit} className="b-2 w-full m-4 flex flex-col gap-4 py-2">
              <Input StartIcon={EmailSVG} EndIcon={CheckSVG} name="email" label="Email Address" inputType="email" />
              <Input StartIcon={LockSVG} EndIcon={CheckSVG} name="passwd" label="Password" inputType="password" />
              <div className="flex flex-row w-full justify-center gap-9 lg:mt-4 md:mt-2 sm:mt-1">
                <button type="button" className="px-4 py-2 rounded-lg text-gray-400 hover:bg-blue-500 hover:text-white" onClick={(e) => {e.preventDefault(); setIsNewUser(false)}}>
                  Signup
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg text-white">
                  Login
                </button>
              </div>
            </form>
            :
            <form onSubmit={handleSubmit} className="b-2 w-full m-4 flex flex-col gap-4 py-2">
              <Input StartIcon={EmailSVG} EndIcon={CheckSVG} name="email" label="Email Address" inputType="email" />
              <Input StartIcon={EditSVG} EndIcon={CheckSVG} name="name" label="Name" />
              <Input StartIcon={LockSVG} EndIcon={CheckSVG} name="passwd" label="Password" inputType="password" />
              <div className="flex flex-row w-full justify-center gap-9 lg:mt-4 md:mt-2 sm:mt-1">
                <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg text-white border-2">
                  Signup
                </button>
                <button type="button" className="px-4 py-2 border-2 rounded-lg text-gray-400 hover:bg-blue-500 hover:text-white" onClick={(e) => {e.preventDefault(); setIsNewUser(true)}}>
                  Login
                </button>
              </div>
            </form>
            }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Auth;
