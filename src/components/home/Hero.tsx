import { hero } from "../../utils/image/index";
import Button from "../general/Button";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <img
        src={hero}
        alt="Prophix Logo"
        className="w-full h-fit"
        loading="eager"
      />
      <div className="mx-auto px-4 md:mx-[100px] h-fit  absolute left-0 top-0  w-1/2 mt-8 md:mt-20 ">
        <div className=" flex flex-col justify-between gap-4">
          <h1 className="text-lg sm:text-xl  md:text-6xl font-mont text-white font-bold md:mt-10">
            The Ultimate
            <br /> Handyman
            <br />
            Platform
          </h1>
          <h2 className="hidden md:block font-semibold font-mont text-base md:text-xl  md:mr-10 text-white">
            Prophix brings together a community of skilled professionals who are
            ready to tackle any task you throw their way
          </h2>
          <div className="mt-4 sm:mt-6 md:mt-10 lg:mt-14">
            <Button text="HIRE A HANDYMAN" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
