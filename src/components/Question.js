// src/app/components/Question.js
import Image from "next/image";

const Question = ({ image }) => {
  return (
    <div className="flex justify-center items-center w-full h-full max-h-[60vh] min-h-[300px]">
      <Image
        src={image}
        alt="Question Image"
        width={300}
        height={300}
        className="object-contain h-full max-h-[60vh] min-h-[300px] w-auto"
      />
    </div>
  );
};

export default Question;