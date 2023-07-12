import {
  profix,
  arrow,
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
} from "../../../utils/image/index";

const Footer = () => {
  return (
    <footer id="footer" className="mx-4 md:mx-[100px] bg-white py-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between items-center ">
        <div className="">
          <img
            src={profix}
            alt="Prophix Logo"
            className="w-fit h-fit "
            // width={40}
            // height={20}
            loading="eager"
          />
        </div>
        <div className="mr-14">
          <a href="mailto:ello@prophix.com">Email: hello@prophix.com</a>
          <div className="flex items-center justify-between gap-4">
            <span className="uppercase font-semibold">follow us</span>
            <span className="flex items-center gap-2">
              <img src={youtube} alt="youtube" width={20} height={20} />
              <img src={facebook} alt="facebook" width={20} height={20} />
              <img src={instagram} alt="instagram" width={20} height={20} />
              <img src={linkedin} alt="linkedin" width={18} height={18} />
              <img src={twitter} alt="twitter" width={20} height={20} />
            </span>
          </div>
        </div>
        <div className=" relative">
          <label className="text-main text-[22px] mb-5" htmlFor="subscribe">
            Subscribe to our Newsletter
          </label>
          <input
            type="text"
            id="subscribe"
            placeholder="Your Email Address"
            className="w-full px-2 py-4 border rounded-lg hover:border-main focus-within:border-main/80 active:border-main "
          />
          <span className="bg-main px-4 py-2 rounded-lg text-white absolute right-2  md:bottom-1.5 cursor-pointer mt-1.5 md:mt-0 ">
            <img
              src={arrow}
              alt="arrow"
              className="w-fit h-fit "
              // width={40}
              // height={20}
            />
          </span>
        </div>
      </div>

      <div className="mt-5">
        {" "}
        <span> © 2023 Prophix Handyman. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
