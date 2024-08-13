import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Banner({ imagePath, title, text }) {
  return (
    <div className={`flex flex-col items-start justify-center px-8 h-[600px] w-full ${ inter.className }`} style={{
      backgroundImage: `url("${ imagePath }")`,
      backgroundSize: "cover"
    }}>
      <h1 className="text-white text-4xl lg:text-5xl font-bold mb-5">{ title }</h1>
      <p className="text-white">{ text }</p>
      <div className="flex justify-center w-full relative">
        <Image
          className="hidden lg:block absolute -bottom-40 animate-bounce"
          src="/icons/scroll-down.png"
          width={40}
          height={40}
          alt="role-para-baixo"
        />
      </div>
    </div>
  );
}
