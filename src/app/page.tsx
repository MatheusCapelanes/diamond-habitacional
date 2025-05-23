'use client'
import { FaListUl } from "react-icons/fa6";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { TextLoop } from "easy-react-text-loop";
import { dataBuilding } from "../../mocks/dataBuilding";
import React from "react";
import EnterpriseProject from "../components/EnterpriseProject";

export default function Home() {
  const areText = [
    "Cooperativa",
    "Inovação",
    "Facilidade",
    "Qualidade",
    "Oportunidade",
  ];

  return (
    <>
      <main className="flex flex-col gap-10">
        {/* Hero Section */}
        <section
          className="flex flex-col items-start justify-center px-6 md:px-16 h-[600px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url("/images/principal/familyHome.jpg")`,
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <div>
              <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-6 flex flex-col md:flex-row gap-3 drop-shadow-lg">
                <span className="mx-2">Somos</span>
                <span className="text-gold">
                  <TextLoop timeout={4000}>{areText.map((t) => <span key={t}>{t}</span>)}</TextLoop>
                </span>
              </h1>
              <p className="text-white font-montserrat mt-8 text-lg md:text-xl max-w-xl drop-shadow">
                Conheça agora o melhor Programa de Habitação que chegou na cidade de Caieiras e região!
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full absolute bottom-8 left-0">
            <img
              className="hidden lg:block animate-bounce"
              src="/icons/scroll-down.png"
              width={40}
              height={40}
              alt="role-para-baixo"
            />
          </div>
        </section>

        {/* Empreendimentos */}
        <section className="w-full max-w-7xl mx-auto px-4">
          <h3 className="text-4xl text-center my-10 font-bold text-[#995522]">
            Confira nossas oportunidades
          </h3>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {dataBuilding.map((b, index) => (
              <EnterpriseProject
                key={index}
                image={b.image}
                title={b.title}
                stage={b.stage}
                bedrooms={b.bedrooms}
                garage={b.garage}
                city={b.city}
                address="-"
                router={b.router}
              />
            ))}
          </div>
        </section>

        {/* Processo de Inscrição */}
        <section className="flex flex-col items-center px-4 md:px-28 mb-10 mt-10 gap-8">
          <h2 className="text-3xl mb-6 font-bold text-[#995522] text-center">
            Como realizar a inscrição no programa habitacional?
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
            {/* Documentação */}
            <div className="w-full max-w-xs bg-zinc-100 rounded-2xl py-8 px-6 shadow-md">
              <div className="flex items-center justify-center flex-col mb-4">
                <FaListUl className="text-2xl text-[#995522]" />
                <h3 className="text-lg font-semibold mb-2">Documentação necessária</h3>
              </div>
              <ul className="list-disc ml-4 text-sm space-y-2 text-zinc-700">
                <li>Identidade (RG ou CNH)</li>
                <li>CPF (Cadastro de Pessoa Física)</li>
                <li>Certidão de nascimento (se for Solteiro(a))</li>
                <li>Certidão de casamento (se for Casado(a))</li>
                <li>Comprovante de endereço</li>
                <li>Comprovante de renda</li>
              </ul>
            </div>
            {/* Processo */}
            <div className="w-full max-w-xs bg-zinc-100 rounded-2xl py-8 px-6 shadow-md">
              <div className="flex items-center justify-center flex-col mb-4">
                <FaEdit className="text-2xl text-[#995522]" />
                <h3 className="text-lg font-semibold mb-2">Processo de inscrição</h3>
              </div>
              <ul className="list-disc ml-4 text-sm space-y-2 text-zinc-700">
                <li>
                  Assinatura da Ficha de adesão, Folha de pagamentos, Declaração de uso de imagem (se houver permissão) e questionário de confirmação de informações.
                </li>
                <li>
                  Assinatura do Termo de adesão (contrato) em duas vias de igual teor.
                </li>
                <li>Pagamento da Taxa de inscrição e adesão.</li>
                <li>Recebimento de recibo de pagamento.</li>
                <li>Foto com o contrato em mãos (opcional).</li>
                <li>Retirada de contrato.</li>
              </ul>
            </div>
            {/* Inscrição realizada */}
            <div className="w-full max-w-xs bg-zinc-100 rounded-2xl py-8 px-6 shadow-md">
              <div className="flex items-center justify-center flex-col mb-4">
                <FaCheckCircle className="text-2xl text-[#995522]" />
                <h3 className="text-lg font-semibold mb-2">Inscrição realizada</h3>
              </div>
              <ul className="list-disc ml-4 text-sm space-y-2 text-zinc-700">
                <li>Acompanhamento das obras atualizadas via site / redes sociais.</li>
                <li>Assessoria contínua com nossos consultores.</li>
                <li>Canal financeiro disponível para os cooperados.</li>
                <li>Assembléias anuais.</li>
                <li>Assembléia de contemplação para entrega das chaves.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
