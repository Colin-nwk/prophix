type Props = {
  text: string;
  type?: string;
};

const Button = ({ text, type = "primary" }: Props) => {
  if (type == "primary") {
    return (
      <button
        type="button"
        className="bg-main py-2 px-4 sm:px-[24px] sm:py-[10px] rounded-3xl w-fit font-mont uppercase text-[12px] md:text-base font-bold text-white hover:bg-red-600 active:bg-red-600 focus-visible:bg-red-700 transition-all ease-in duration-300"
      >
        {text}
      </button>
    );
  }
  if (type == "secondary") {
    return (
      <button
        type="button"
        className="bg-[#011014] py-2 px-4 sm:px-[24px] sm:py-[10px] rounded-3xl min-w-fit font-mont text-[12px] md:text-base font-bold text-white hover:bg-[#011014]/80 active:bg-[#011014]/70 focus-visible:bg-[#011014]/70 transition-all ease-in duration-300"
      >
        {text}
      </button>
    );
  }
  if (type == "tertiary") {
    return (
      <button
        type="button"
        className="bg-[#A4A4A4] py-2 px-4 sm:px-[24px] sm:py-[10px] rounded-3xl min-w-fit font-mont uppercase text-[12px] md:text-base font-bold text-[#011014] hover:bg-[#A4A4A4]/80 active:bg-[#A4A4A4]/70 focus-visible:bg-[#A4A4A4]/70 transition-all ease-in duration-300"
      >
        {text}
      </button>
    );
  }
};

export default Button;
