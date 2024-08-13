import Image from "next/image";

export default function Section() {
  return (
    <main>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 my-12">
        <div className="flex flex-col justify-center space-y-5 mb-5">
          <h2 className="text-3xl font-bold text-[#995522]">A primeira cooperativa do Brasil</h2>
          <p>No brasil, a primeira cooperativa surgiu em 1889, na cidade de Outro Preto, Minas Gerais, com o objetivo de adquirir produtos agrícolas em condições acessíveis para os seus cooperados.</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/igreja.jpg"
            width={360}
            height={304}
            alt="A primeira cooperativa do Brasil"
          />
        </div>
      </div>
    </main>
  );
}
