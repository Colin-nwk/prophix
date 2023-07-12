type Props = {
  title: string;
  content: string;
};
const FaqItem = ({ title, content }: Props) => {
  return (
    <div className=" flex flex-col gap-4">
      <h4 className="text-[16px] font-semibold  tracking-tighter">{title}</h4>
      <p className="text-base font-mont ">{content}</p>
    </div>
  );
};

export default FaqItem;
