import { useRouter } from "next/navigation";
import Image from "next/image";

const Question = ({ image }) => {
  const router = useRouter();
  const basePath = router.basePath || ""; // basePath を取得（設定されていない場合は空）

  return (
    <div className="flex justify-center items-center w-full h-full max-h-[60vh] min-h-[300px]">
      <Image
        src={`${basePath}${image}`} // basePath を考慮
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
