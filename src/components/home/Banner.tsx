import { iphone, apple, google } from "../../utils/image/index";

const Banner = () => {
  return (
    <div className="rounded-[40px] bg-main  grid grid-cols-1 md:grid-cols-2 justify-between items-center overflow-hidden">
      <div className="flex flex-col gap-3 justify-between items-center mt-8 md:mt-0 md:items-start mx-auto p-4 ">
        <div className="max-w-[450px]">
          <h3 className="font-bold text-white font-mont text-2xl md:text-5xl mb-4">
            Join Prophix and start earning
          </h3>
        </div>
        <p className="text-white  md:-mt-4">
          Download Prophix app for free to get started
        </p>
        <div className="flex justify-between gap-8 flex-wrap mt-4 md:mt-10">
          <img
            src={google}
            alt="play store"
            className="w-40 h-14 cursor-pointer"
            // width={186}
            // height={65}
          />
          <img
            src={apple}
            alt="app store"
            className="w-40 h-14 cursor-pointer"
          />
        </div>
      </div>
      <div className="first-line:">
        <img
          src={iphone}
          alt="iphone 13 pro"
          className=" w-fit h-fit mt-10 md:mt-20 mx-auto"
          //     width={64}
          //     height={64}
        />
      </div>
    </div>
  );
};

export default Banner;
