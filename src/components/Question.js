import Image from "next/image";

const Question = ({ image }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt="問題の画像"
        width={450}
        height={300} 
        className="rounded-lg"
      />
    </div>
  );
};

export default Question;