import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

/**
 * Fontes
 */
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

import Section from "@/components/Section";
import DocumentacaoNecessaria from "@public/icons/documentacao-necessaria.svg";
import ProcessoDeInscricao from "@public/icons/processo-de-inscricao.svg";
import InscricaoRealizada from "@public/icons/inscricao-realizada.svg";
import EnterpriseProject from "@/components/EnterpriseProject";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sua Melhor Escolha para Habitação Segura - Cooperativa Habitacional
          Diamond
        </title>
        <meta
          name="description"
          content="É seguro ingressar no Programa de Habitação da Cooperativa Habitacional Diamond? Sim, é seguro! O cooperativismo é regulado pela Lei 5.764/1971, proporcionando tranquilidade e confiabilidade aos participantes."
        />
        <meta property="og:title" content="Cooperativa Habitacional Diamond" />
        <meta
          property="og:description"
          content="Descubra por que ingressar na Cooperativa Habitacional Diamond é uma escolha segura e confiável. O cooperativismo é regulado pela Lei 5.764/1971, garantindo tranquilidade aos participantes."
        />
        <meta property="og:url" content="https://diamondhabitacional.com.br/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className={`flex flex-col ${roboto.className} space-y-5`}>
        <div
          className={`flex flex-col items-start justify-center px-16 h-[600px] w-full ${inter.className}`}
          style={{
            backgroundImage: `url("/banners/cooperativismo.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <div>
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-5">
                Somos <span className="text-[#ffd862]">Inovação</span>
              </h1>
              <p className="text-white">
                Conheça agora o melhor Programa de Habitação que chegou na
                cidade de Caieiras e região!
              </p>
            </div>
            {/* Vídeo da Diamond */}
            <div>
              <video
                className="rounded-xl p-[1px] bg-[#ffd862] w-80 md:w-[420px]"
                width="420"
                height="300"
                autoPlay
                muted
                loop
              >
                <source
                  src="/videos/apresentacao-diamond-video-curta-duracao.mp4"
                  type="video/mp4"
                />
                <source
                  src="/videos/apresentacao-diamond-video-curta-duracao.webp"
                  type="video/webm"
                />
                <p className="text-white">
                  Seu navegador não suporta a reprodução de vídeos.
                </p>
              </video>
            </div>
          </div>
          <div className="flex justify-center w-full relative">
            <Image
              className="hidden lg:block absolute -bottom-30 animate-bounce"
              src="/icons/scroll-down.png"
              width={40}
              height={40}
              alt="role-para-baixo"
            />
          </div>
        </div>
        {/* Empreendimentos */}
        <div className="w-4/5 m-auto">  
          <h3 className="font-bold text-2xl text-center mt-10 font-roboto text-">Confira nossas oportunidades</h3>
          <Section className={"w-4/5 m-auto flex flex-wrap justify-around"}>
            <EnterpriseProject
              image="images/residencial-topazio/new-images/frente.jpeg"
              title="Residencial Topázio"
              stage="Em construção"
              bedrooms={2}
              garage
            />
            <EnterpriseProject
              image="images/residencial-safira/gallery/apartamento-3-4.jpg"
              title="Residencial Safira"
              stage="Lançamento"
              bedrooms={2}
              garage
            />
          </Section>
          <Section className="flex flex-col justify-center items-center px-28">
            <div>
              <h2 className="text-3xl font-bold text-[#995522] mb-4">
                Como realizar a inscrição no programa habitacional?
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-8 mt-5 mb-4">
              <div className="w-[320px] bg-zinc-100 rounded-2xl py-8 px-4">
                <div className="flex items-center justify-center flex-col">
                  <Image
                    src={DocumentacaoNecessaria}
                    width={36}
                    height={36}
                    alt="Documentação Necessária"
                    className="mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-4">
                    Documentação necessária
                  </h2>
                </div>
                <div>
                  <ul className="list-disc ml-4 text-sm space-y-2">
                    <li>Identidade (RG ou CNH)</li>
                    <li>CPF (Cadastro de Pessoa Física)</li>
                    <li>Certidão de nascimento (se for Solteiro(a))</li>
                    <li>Certidão de casamento (se for Casado(a))</li>
                    <li>Comprovante de endereço</li>
                    <li>Comprovante de renda</li>
                  </ul>
                </div>
              </div>
              <div className="w-[320px] bg-zinc-100 rounded-2xl border border-[#995522] border-s-2 py-8 px-4">
                <div className="flex items-center justify-center flex-col">
                  <Image
                    src={ProcessoDeInscricao}
                    width={36}
                    height={36}
                    alt="Documentação Necessária"
                    className="mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-4">
                    Processo de inscrição
                  </h2>
                </div>
                <div>
                  <ul className="list-disc ml-4 text-sm space-y-2">
                    <li>
                      Assinatura da Ficha de adesão, Folha de pagamentos, Declação
                      de uso de imagem (se houver permissão) e questionário de
                      confirmação de informações.
                    </li>
                    <li>
                      Assinatura do Termo de adesão (contrato) em duas vias de
                      igual teor.
                    </li>
                    <li>Pagamento da Taxa de inscrição e adesão.</li>
                    <li>Recebimento de recibo de pagamento.</li>
                    <li>Foto com o contrato em mãos (opcional).</li>
                    <li>Retirada de contrato.</li>
                  </ul>
                </div>
              </div>
              <div className="w-[320px] bg-zinc-100 rounded-2xl py-8 px-4">
                <div className="flex items-center justify-center flex-col">
                  <Image
                    src={InscricaoRealizada}
                    width={36}
                    height={36}
                    alt="Documentação Necessária"
                    className="mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-4">
                    Inscrição realizada
                  </h2>
                </div>
                <div>
                  <ul className="list-disc ml-4 text-sm space-y-2">
                    <li>
                      Acompanhamento das obras atualizadas via site / redes
                      sociais.
                    </li>
                    <li>Assessoria contínua com nossos consultores.</li>
                    <li>Canal financeiro disponível para os cooperados.</li>
                    <li>Assembléias anuais.</li>
                    <li>Assembléia de contemplação para entrega das chaves.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
