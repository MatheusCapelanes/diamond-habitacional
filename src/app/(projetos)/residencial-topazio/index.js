import Head from "next/head";
import Image from "next/image";

import BannerPageProjects from "../residencial-safira/components/Banner";
import Background from "../residencial-safira/components/Background";

export default function ResidencialTopazio() {
  return (
    <>
      <Head>
        <title>Residencial Topázio - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="O melhor 2 dormitórios em Caieiras. Cooperativismo de alta qualidade. Conheça o lançamento Residencial Topázio, casas geminadas de 75 metros quadrados, condomínio fechado com vaga de garagem privativa e mais." />
        <meta property="og:title" content="Residencial Topázio" />
        <meta property="og:description" content="Descubra o Residencial Topázio em Caieiras. Casas geminadas de 2 dormitórios em condomínio fechado, com vaga de garagem privativa e mais. Sua nova moradia de qualidade está aqui." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/projetos/residencial-topazio"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <BannerPageProjects
          imagePath="/banners/residencial-topazio.jpg"
          title="Residencial Topázio"
          text="O cooperativismo no melhor padrão que você merece! Chegou em Caieiras o projeto que está revolucionando o mercado de cooperativas habitacionais!"
          subtitle="O MELHOR 2 DORMITÓRIOS DE CAIEIRAS"
          link="https://wa.me/5511953493313"
        />
        {/* Inovação em moradia */}
        <div
          style={{
            background: "linear-gradient(180deg, #995522 0%, #995522 100%)",
          }} className="flex justify-center items-center md:flex flex-col md:flex-row px-4 md:px-6 py-8">
          <div className="md:flex justify-center items-center md:w-[100%]">
            <Image
              className="rounded-2xl"
              src="/images/residencial-topazio/new-images/frente.jpeg"
              width={600}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-start">
            <p className="text-white text-xl font-bold ">SÃO 75 METROS QUADRADOS</p>
            <h1 className="text-4xl font-bold mb-5 text-[#ffd760]">Inovação em Moradia</h1>
            <p className="text-white flex">O único empreendimento com 2 dormitórios, é a oportunidade perfeita de ter o melhor custo benefício na sua adesão!</p>
          </div>
        </div>
        {/* Sala de jantar */}
        <Background
          title={"Sala de jantar integrada com a sala"}
          subtitle={"Essa solução arquitetônica oferece uma série de benefícios funcionais e estéticos, criando um ambiente convidativo e prático para a convivência familiar e o entretenimento."}
          className={`flex w-full h-[350px] rounded-2xl mt-16 bg-bottom`}
          imagePath="/images/residencial-topazio/new-images/sala.jpeg"
        />
        {/* Cozinha */}
        <Background
          title={"Cozinha no conceito L"}
          subtitle={"Uma abordagem inovadora na arquitetura de interiores, onde a cozinha é projetada em um formato de L, aproveitando ao máximo o espaço disponível para criar uma área de preparo funcional e prática."}
          className={`flex w-full h-[350px] rounded-2xl mt-16 bg-bottom`}
          imagePath="/images/residencial-topazio/new-images/cozinha.jpeg"
        />
        {/* Lababo */}
        <div className="flex flex-col text-center justify-center items-center mt-16 md:mt-24">
          <div className="flex justify-center  items-center flex-col lg:flex-row">
            <div className="p-5">
              <h2 className="text-3xl md:text-4xl font-bold text-[#995522] mb-5">Lavabo</h2>
              <Image
                src="/images/residencial-topazio/new-images/lavabo.jpeg"
                width={400}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="p-5 ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#995522] mb-5">Lavanderia externa coberta</h2>
              <Image
                src="/images/residencial-topazio/new-images/churrasqueira.jpeg"
                width={500}
                height={250}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <Background
          title={"Suíte de solterio"}
          className={`flex w-full h-[350px] rounded-2xl mt-8`}
          imagePath="/images/residencial-topazio/suite-solteiro.jpg"
        />
        <Background
          className={`flex w-full h-[350px] rounded-2xl`}
          imagePath="/images/residencial-topazio/banheiro-suite-solteiro.jpg"
        />
        {/* Suíte casal */}
        <div className="flex flex-col text-center justify-center items-center mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#995522] mb-5">Suíte de casal</h2>
          <div className="flex justify-center  items-center  flex-col lg:flex-row">
            <div className="p-5">
              <Image
                src="/images/residencial-topazio/suite-casal.jpg"
                width={400}
                height={200}
              />
            </div>
            <div className="p-5">
              <Image
                src="/images/residencial-topazio/banheiro-suite-casal.jpg"
                width={375}
                height={200}
              />
            </div>
          </div>
        </div>
        {/* Quintal */}
        <Background
          title={"Quintal exclusivo"}
          className={`flex w-full h-[500px] rounded-2xl mb-8`}
          imagePath="/images/residencial-topazio/new-images/area-fundo.jpeg"
        />
      </main>
    </>
  );
}
