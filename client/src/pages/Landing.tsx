import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { USER } from "@/services/service";

const Landing = () => {
  const navigate = useNavigate() ;
  useEffect(() => {
    USER.validate(navigate) ;
  }, [])

  return <div>Landing</div>;
};

export default Landing;
