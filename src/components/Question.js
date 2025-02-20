import { useRouter } from "next/navigation";
import Image from "next/image";

const Question = ({ image }) => {
  const router = useRouter();
  //const basePath = router.basePath || ""; 

  return (
    <div className="flex justify-center items-center w-full h-full max-h-[60vh] min-h-[300px]">
      <Image
        src={color/image} // basePath を考慮
        alt="Question Image"
        width={300}
        height={300}
        unoptimized // GitHub Pages では Next.js の画像最適化が動作しないため
        className="object-contain h-full max-h-[60vh] min-h-[300px] w-auto"
      />
    </div>
  );
};

export default Question;
