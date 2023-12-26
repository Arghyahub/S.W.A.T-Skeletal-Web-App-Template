import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { USER } from "@/services/service";
import { userDataAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

const Home = () => {
  const navigate = useNavigate();
  const [User, setUser] = useRecoilState(userDataAtom) ;

  useEffect(() => {
    USER.validate(navigate,setUser,'/home') ;
  },[])
  return (
    <div>Home</div>
  )
}

export default Home