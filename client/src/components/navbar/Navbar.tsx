import React from "react";

import { cn } from "@/lib/utils";
import { 
  BarsSVG, 
  LogoSVG,
  UserSVG

} from "../../assets/index";

const Navbar = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "bg-[var(--foreground)] h-14 flex flex-row items-center",
        className
      )}
    >
      {/* Left options */}
      <div className="flex flex-row ml-4">
        <BarsSVG />
        <LogoSVG className="ml-3" />
        <h2 className="text-white special-font ml-2 font-semibold">
          W h e r e I L e f t
        </h2>
      </div>

      {/* Right options */}
      <div className="ml-auto mr-4">
        <UserSVG className="text-white" />
      </div>

    </div>
  );
};

export default Navbar;
