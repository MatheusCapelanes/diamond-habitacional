import Image from "next/image";

export default function ImageAndText({ ImagePath, title }) {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center items-center text-center mt-[60px]">
        <div>
          <Image
            className="p-5"
            src={`${ImagePath}`}
            width={450}
            height={200}
          />
        </div>
        <div className="w-[30%] text-start mx-5">
          <h2 className="text-3xl font-bold text-[#995522]">{title}</h2>
        </div>
      </div>
    </main>
  );
}
