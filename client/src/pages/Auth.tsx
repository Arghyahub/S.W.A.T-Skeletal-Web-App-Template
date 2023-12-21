import React from "react";

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
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="h-full w-full flex flex-row justify-center items-center bg-[var(--hover)] shadow-2xl">

        <div className="w-11/12 h-5/6 backdrop-blur-3xl bg-[var(--primary)] rounded-xl shadow-2xl flex flex-row">
          <div className="right-img h-full w-3/5 flex flex-row justify-center">
            <img src={AuthVec} alt="Vector Image" className="h-full w-full object-contain p-2" />
          </div>

          <div className="left-form flex flex-col h-full w-2/5 justify-center items-center p-4 border-4 rounded-xl">
            <h1 className="w-full">Welcome User</h1>
            <p className="w-full">To create an account fill the following details and click on signup</p>
            <form className="b-2 w-full h-full border-2 m-4 flex flex-col gap-2 py-2">
              
              {/* <div className="w-full border rounded-md flex flex-row items-center px-2 py-3">
                <EmailSVG className='h-8 w-8 text-gray-500' />
                <div className="input-box flex flex-col h-full w-full px-3">
                  <p className="text-xs text-gray-400 font-thin">Email Address</p>
                  <input type="text" className="flex flex-row w-full h-5 focus:outline-none font-sans" />
                </div>
                <CheckSVG />
              </div> */}

              <Input StartIcon={EmailSVG} EndIcon={CheckSVG} label="Email Address" inputType="email" />

              <Input StartIcon={EditSVG} EndIcon={CheckSVG} label="Name" />

              <Input StartIcon={LockSVG} EndIcon={CheckSVG} label="Password" />
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Auth;
