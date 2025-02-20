// src/app/components/Question.js
import Image from "next/image";

const Question = ({ image }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="flex justify-center items-center w-full h-full max-h-[60vh] min-h-[300px] my-4">
      <Image
        src={`${basePath}${image}`}
        alt="Question Image"
        width={300}
        height={300}
        unoptimized
        className="object-contain h-full max-h-[60vh] min-h-[300px] w-auto"
      />
    </div>
  );
};

export default Question;
