type Props = {
  comment: string;
  name: string;
  role: string;
  photo: string;
};
const ReviewItem = ({ comment, photo, role, name }: Props) => {
  return (
    <div className="w-full h-fit p-8 border border-black rounded-lg flex flex-col items-start gap-3">
      <div>
        <p className="text-left font-mont">{comment}</p>
      </div>
      <div className="inline-flex gap-2">
        <img
          src={photo}
          alt={name}
          className="rounded-full"
          //     width={64}
          //     height={64}
        />
        <div>
          <p className="uppercase font-medium text-xl">{name}</p>
          <p className="uppercase text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewItem;
