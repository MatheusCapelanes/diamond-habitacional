import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function BannerPageProjects({ imagePath, title, text, subtitle, link }) {
  return (
    <div className={`flex flex-col items-start justify-center px-12 h-[600px] w-full ${inter.className}`} style={{
      backgroundImage: `url("${imagePath}")`,
      backgroundSize: "cover"
    }}>
      <p className="text-white text-1xl md:text-2xl font-bold flex">{subtitle}</p>
      <p className="w-full md:w-2/3 lg:w-2/3 flex mb-2 border-1"></p>
      <h1 className="text-white text-4xl lg:text-5xl font-bold mb-3">{title}</h1>
      <p className="text-white flex md:pe-[600px]">{text}</p>
      <Link className="bg-[#ffd862] text-black font-bold mt-[55px] rounded-xl p-3" href={`${link}`} target="_blank">Agende uma visita para conhecer</Link>
      <div className="flex justify-center w-full relative">
        <Image
          className="hidden lg:block absolute -bottom-20 animate-bounce"
          src="/icons/scroll-down.png"
          width={40}
          height={40}
          alt="role-para-baixo"
        />
      </div>
    </div>
  );
}
