type Props = {
  text1: string;
  text2: string;
};

const Heading = ({ text1, text2 = "" }: Props) => {
  return (
    <h2 className="font-mont font-bold text-2xl md:text-4xl mb-5">
      <span className="text-black capitalize">{text1}</span>{" "}
      <span className="text-main capitalize">{text2}</span>
    </h2>
  );
};

export default Heading;
