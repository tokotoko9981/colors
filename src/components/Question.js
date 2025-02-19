// src/app/components/Question.js
import Image from "next/image";

const Question = ({ image }) => {
  return (
    <div className="flex justify-center items-center w-full h-full max-h-[60vh]">
      <Image
        src={image}
        alt="問題の画像"
        width={300}
        height={300}
        className="object-contain h-full max-h-[60vh] w-auto"
      />
    </div>
  );
};

export default Question;