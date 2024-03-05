import Head from "next/head";
import Image from "next/image";

import BannerPageProjects from "./components/Banner";
import SectionProject from "./components/SectionProject";
import Galleri from "./components/Galleri";
import Background from "./components/Background";
import SafiraCarousel from "@/components/SafiraCarousel";

export default function ResidencialSafira() {
  return (
    <>
      <Head>
        <title>Residencial Safira - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="Conheça o Residencial Safira, o melhor 3 dormitórios em Caieiras! Cooperativismo de alto padrão para sua família. Revolucione sua moradia hoje mesmo." />
        <meta property="og:title" content="Residencial Safira" />
        <meta property="og:description" content="Descubra o Residencial Safira, onde o cooperativismo de alto padrão se encontra com o melhor 3 dormitórios de Caieiras. Revolucione sua moradia hoje mesmo." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/projetos/residencial-safira"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <BannerPageProjects
          imagePath="/banners/noticias.jpg"
          title="Residencial Safira"
          text="O cooperativismo no melhor padrão que você merece! Chegou em Caieiras o projeto que está revolucionando o mercado de cooperativas habitacionais!"
          subtitle="O MELHOR 3 DORMITÓRIOS DE CAIEIRAS"
          link="https://wa.me/5511953493313"
        />
        <SectionProject />
        <div className="flex itens-center justify-center my-8">
          <div className="w-[80%] flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#995522] mb-5">Revolução no conceito de moradia</h2>
            <SafiraCarousel />
          </div>
        </div>
        <Background
          title={"Academia com vista panorâmica na cobertura"}
          subtitle={"Você treinando com uma paisagem inspiradora!"}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/academia.jpg"
        />
        <Galleri />
        <div className="flex flex-col md:flex-row justify-center items-center text-center mt-[60px]">
          <div>
            <Image
              className="p-5"
              src="/images/residencial-safira/brincedoteca.jpg"
              width={500}
              height={200}
            />
          </div>
          <div className="sm:w-full px-8 md:w-[30%] text-start mx-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#995522] mb-5">A criançada vai se divertir muito!</h2>
          </div>
        </div>
        <Background
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl`}
          imagePath="/images/residencial-safira/parquinho-infanfil.jpg"
        />
        <div className="flex flex-col text-center justify-center items-center mt-[100px]">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#995522]">Os PETs tem um papel importante</h2>
          <p className="mb-12">Por isso merecem um espaço de cuidado e diversão também</p>
          <div className="flex justify-center items-center  flex-col lg:flex-row">
            <div className="p-5">
              <Image
                src="/images/residencial-safira/espaco-pet.jpg"
                width={400}
                height={200}
              />
            </div>
            <div className="p-5">
              <Image
                src="/images/residencial-safira/cuide-do-pet.jpg"
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
        <Background
          title={"Quadra poliesportiva"}
          subtitle={"Para quem não dispensa uma boa partida de basquete ou futebol teremos uma linda quadra poliesportiva no tamanho ideal para uma partida"}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/quadra.jpg"
        />
        <div className="flex flex-col md:flex-row justify-center items-center text-center mt-[30px]">
          <div className="sm:w-full px-8 md:w-[40%] text-start">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#995522]">Circuito de caminhada</h2>
            <p className="mt-6">Que tal desfrutar de um circuito de caminhada dentro do seu condomínio com toda beleza externa à sua volta, praticar exercícios ao ar livre. E em contato com a natureza vai ser a melhor experiência!</p>
          </div>
          <div className="flex flex-col justify-center space-y-5 md:mb-5">
            <Image
              className="p-5"
              src="/images/residencial-safira/area-aberta.jpg"
              width={500}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:mt-[30px]">
          <div>
            <Image
              className="p-5"
              src="/images/residencial-safira/bancos-com-lareira.jpg"
              width={500}
              height={200}
            />
          </div>
          <div className="w-full md:w-[40%]">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#995522]">Praça da lareira</h2>
            <p className="mt-6">Espaços criados e pensados com todo carinho</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-center mt-[30px]">
          <div className="w-full px-4 md:w-[40%] md:text-start">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#995522]">Espaço de estudos e trabalho</h2>
            <p className="mt-6">Pensando na produtividade e na praticidade do dia a dia, teremos a disposição um espaço de estudos e trabalho para seu uso</p>
          </div>
          <div className="flex flex-col justify-center space-y-5 mb-5">
            <Image
              className="p-5"
              src="/images/residencial-safira/espaco-de-trabalho.jpg"
              width={500}
              height={200}
            />
          </div>
        </div>
        <Background
          title={"Vagas de garagem livres e indeterminadas"}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/estacionamento.jpg"
        />
        <Background
          title={"Bicicletário individual para cada torre"}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/bicicletario.jpg"
        />
        <Background
          title={"Áreas de lazer distribuídas no térreo"}
          subtitle={"2 salões de festas, Brinquedoteca, Playground, Quadra poliesportiva, Pista de caminhada, Área pet, Pet care, Praça da lareira, Praça central, 4 churrasqueiras cobertas"}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/planta-geral.jpg"
        />
        <Background
          title={"Áreas de lazer distribuídas na cobertura exclusivas de cada torre"}
          subtitle={"Piscina, Adulto e Infantil, Solarium, Área Gourmet e Academia "}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/planta-visao-superior.jpg"
        />
        <Background
          title={"Serão 25 andares "}
          subtitle={"Com lazer na cobertura, garagem coberta e bicicletário "}
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mt-16`}
          imagePath="/images/residencial-safira/estrutura-dos-predios.jpg"
        />
        <div className="flex flex-col text-center justify-center items-center mx-4 md:mx-52 mt-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#995522]">Localidade do Residencial Safira</h2>
          <div className="md:w-[80%] flex justify-center items-center flex-col">
            <p>Apartamentos de 80 metros quadrados sendo 3 dormitórios com 1 suíte e ampla varanda gourmet, opção 1 ou 2 vagas de garagem cobertas pontos de ar condicionado entregues e opção living ampliado  </p>
            <div className="flex flex-col md:flex-row md:space-x-28">
              <div>
                <Image
                  className="p-5"
                  src="/images/residencial-safira/localizacao-residencial-safira.jpg"
                  width={500}
                  height={200}
                />
              </div>
              <div>
                <Image
                  className="p-5"
                  src="/images/residencial-safira/planta-do-apartamento.jpg"
                  width={500}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center mx-4 md:mx-52">
          <div className="md:w-[80%]">
            <p>Na melhor localização de caieiras, jardim europa, local arborizado, fácil acesso ao centro e as principais avenidas e rodovias de acesso a grande são paulo, a cidade conta com estação de trem há poucos minutos e toda infraestrutura e segurança que sua família precisa para viver com qualidade de vida.</p>
            <p className="mt-8">Na melhor localização de caieiras, jardim europa, local arborizado, fácil acesso ao centro e as principais avenidas e rodovias de acesso a grande são paulo, a cidade conta com estação de trem há poucos minutos e toda infraestrutura e segurança que sua família precisa para viver com qualidade de vida.</p>
          </div>
        </div>
        <Background
          className={`flex w-full md:w-[900px] h-[350px] rounded-2xl mb-12 -mt-16`}
          imagePath="/images/residencial-safira/residencial-safira-com-diamond.jpg"
        />
      </main>
    </>
  );
}
