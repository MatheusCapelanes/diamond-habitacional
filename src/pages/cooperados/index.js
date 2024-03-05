import Head from "next/head";

import Banner from "@/components/Banner";
import Carousel from "@/components/CooperatedCarousel";

export default function Cooperados() {
  return (
    <>
      <Head>
        <title>Cooperados - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="Explore nossos programas habitacionais e inicie sua jornada rumo à conquista do seu lar." />
        <meta property="og:title" content="Cooperados da Cooperativa Habitacional Diamond" />
        <meta property="og:description" content="Confira como a Diamond Habitacional, através do cooperativismo, torna o sonho da casa própria uma realidade. Explore nossos programas habitacionais e inicie sua jornada rumo à conquista do seu lar." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/cooperados"
        />
        <meta property="og:type" content="website" />
      </Head>
      <>
        <Banner
          imagePath="/banners/cooperados.jpg"
          title="Cooperados"
          text="Cooperativa habitacional que busca realizar o sonho da casa própria através do cooperativismo."
        />
        <div className="bg-[#fedb73] flex items-center justify-center flex-col">
          <p className="p-8 text-center md:w-[70%]">A <strong>Cooperativa Habitacional Diamond</strong> acredita em pessoas, e somos gratos pela confiança depositada por cada família! Contem com a gente neste processo de realização de sonhos, no cooperativismo realizações acontecem! Ficamos felizes por cada sorriso e comemoração no primeiro passo dado, agora caminharemos juntos, rumo ao sucesso!</p>
          <div className="flex itens-center justify-center pb-8">
            <div className="w-full flex justify-center items-center">
              <Carousel />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
