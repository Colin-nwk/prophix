
import Navbar from "./Navbar";
import Button from "../general/Button";

import { profix } from "../../utils/image/index";
const Header = () => {
  return (
    <header className=" px-4 md:px-[100px] mx-auto h-70  md:h-[120px] overflow-x-hidden sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center gap-4 md:gap-10  max-w-container h-full mx-auto ">
        <a href="">
          <div className="inline-flex items-center gap-0 sm:gap-2 ">
            <img
              src={profix}
              alt="Prophix Logo"
              className="w-fit h-fit md:w-full md:h-full py-2 md:py-0"
              width={40}
              height={20}
              loading="eager"
            />
            <div className=" hidden sm:inline-block font-inter uppercase text-lg sm:text-xl md:text-3xl">
              <h3>PROPHIX</h3>
              <h3>HANDYMAN</h3>
            </div>
          </div>
        </a>

        <Navbar />
        <div className="hidden md:inline-block">
          <Button text="join us" />
        </div>
      </div>
    </header>
  );
};

export default Header;
