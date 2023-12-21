import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { USER } from "@/services/service";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    USER.validate(navigate) ;
  },[])

  return <div>Home</div>;
};

export default Home;
