import Image from "next/image";

export default function Galleri() {
  return (
    <div className="flex flex-col text-center justify-center items-center mt-[100px]">
      <h2 className="mb-4 text-3xl md:4xl font-bold text-[#995522]">Espaço para comemorar de sobra</h2>
      <p className="mb-12">Salão de festas, área gourmet e sala de jogos!</p>
      <div className="flex justify-center  items-center  flex-col lg:flex-row">
        <div className="p-5">
          <Image          
            src="/images/residencial-safira/espaco-para-comemorar.jpg"
            width={400}
            height={200}
          />
        </div>
        <div className="p-5">
          <Image
            src="/images/residencial-safira/salao-de-festas.jpg"
            width={400}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-5">
          <Image
            src="/images/residencial-safira/sala-de-jogos.jpg"
            width={400}
            height={200}
          />
        </div>
        <div className="p-5">
          <Image
            src="/images/residencial-safira/area-gourmet.jpg"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
