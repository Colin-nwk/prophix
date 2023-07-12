import Heading from "../../general/Heading";

import { iphone } from "../../../utils/image/index";

const About = () => {
  return (
    <section id="about-us" className="mx-auto">
      <div className="mx-4 md:mx-[100px] flex flex-col md:flex-row items-start justify-between gap-7 py-4 md:py-10 ">
        <div className=" w-full h-full mt-4 md:mt-10">
          <div className="text-center">
            <Heading text1="About" text2="Us" />
          </div>
          <div className="flex flex-col gap-4 justify-end mt-10 font-medium ">
            <p className="">
              Experience the convenience and peace of mind that comes with
              having a trusted handyman at your fingertips. Whether you need
              help with minor repairs, home improvements, or even full-scale
              renovations, Prophix connects you with the perfect match for your
              project.
            </p>
            <p className="">
              Our platform is designed to simplify your life, offering an
              intuitive interface where you can easily browse through profiles,
              read reviews, and compare quotes. With Prophix, you are in control
              every step of the way, ensuring that your home improvement journey
              is smooth and stress-free.
            </p>
          </div>
        </div>
        <div className=" w-full h-[400px] bg-main p-10 rounded-[40px] flex items-center justify-center overflow-clip">
          <img
            src={iphone}
            alt="Prophix Logo"
            className="w-fit mt-24 pt-20 mx-16"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
