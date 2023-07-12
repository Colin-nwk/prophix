type Props = {
  digit: string;
  title: string;
  content: string;
};

const AboutItem = ({ digit, title, content }: Props) => {
  return (
    <>
      <div className="flex justify-start items-start gap-3">
        <div className="">
          <span className=" bg-gray-300 rounded-full py-0.5 px-2">{digit}</span>
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="">{content}</p>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
