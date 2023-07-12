const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <nav className="hidden md:inline-flex items-center gap-8 ">
        <ul className="flex text-lg gap-8 text-black ">
          <a
            href="#home"
            className="transition-all font-semibold hover:text-main cursor-pointer duration-300"
          >
            <li>Home</li>
          </a>
          <a
            href="#about-us"
            className="transition-all font-semibold hover:text-main cursor-pointer duration-300"
          >
            <li>About Us</li>
          </a>
          <a
            href="#services"
            className="transition-all font-semibold hover:text-main cursor-pointer duration-300"
          >
            <li>Services</li>
          </a>
          <a
            href="#faq"
            className="transition-all font-semibold hover:text-main cursor-pointer duration-300"
          >
            <li>FAQ</li>
          </a>
          <a
            href="#news"
            className="transition-all font-semibold hover:text-main cursor-pointer duration-300"
          >
            <li>News</li>
          </a>
        </ul>
      </nav>

      <div className="w-6 h-6 flex md:hidden flex-col justify-between items-center text-4xl text-gray-50 cursor-pointer overflow-hidden group ">
        <span className="w-full h-[2px] bg-gray-950  inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        <span
          className="w-full h-[2px] bg-gray-950  inline-flex transform
          translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
        ></span>
        <span
          className="w-full h-[2px] bg-gray-950  inline-flex transform
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
        ></span>
      </div>
    </div>
  );
};

export default Navbar;
