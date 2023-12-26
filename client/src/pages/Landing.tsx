import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { USER } from "@/services/service";
import { useRecoilState } from "recoil";
import { userDataAtom } from "@/recoil/atom";

const Landing = () => {
  const navigate = useNavigate() ;
  const [User, setUser] = useRecoilState(userDataAtom) ;

  useEffect(() => {
    USER.validate(navigate,setUser) ;
  }, [])

  return <div>Landing</div>;
};

export default Landing;
