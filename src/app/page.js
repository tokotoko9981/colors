"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-500 p-4">
      <div className="flex flex-col items-center flex-1 w-full">
        <Image src="/colors/images/logo.svg" alt="Game Logo" width={600} height={600} className="mb-6" />

        {/* Introduction Section */}
        <div className="max-w-2xl text-white text-sm md:text-base leading-relaxed mb-6">
          <h2 className="text-lg font-bold">Introduction</h2>
          <p>出題される問題に対し答え、クリアを目指すゲームです。</p>
          <p>全ての問題が数字と記号のみで構成されています。</p>
          <p>そして、言語能力を必要とする問題は一切ありません。世界中の大体の人が取り組めます。</p>
          <p>協力プレイなど基本なんでもOKです。</p>
          <p>また、PCでのプレイを想定していますが、想定しているだけでスマホ等でもプレイ可能だと思います。</p>
          <p>(ブラウザは最新版のGoogle Chromeを推奨しますがこれも推奨しているだけです。)</p>

          <h2 className="text-lg font-bold mt-4">Rule</h2>
          <p>画面に出題される問題に対しキーパッドが用意されているのでそれを用いて入力してください。</p>
          <p>×は消去、✓は確定を表します。</p>
          <p>画面下部にはすでに到達した問題に移動することができるボタンがついています。</p>
          <p>なんで戻れるかは察してください。</p>

          <h3 className="text-lg font-bold mt-4">以下のボタンを押したらゲームスタートです。日本語はもうクリアまで出てきません。</h3>
        </div>

        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => router.push("/question")}
        >
          →
        </button>

        <h2 className="text-lg font-bold mt-4">Creator</h2>
        <p>トコトコ</p>
        <p>Twitter: <a href="https://twitter.com/tokotoko_9981" className="underline">tokotoko_9981</a></p>
      </div>
    </div>
  );
};

export default Home;
