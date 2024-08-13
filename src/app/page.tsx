'use client'
import { FaListUl } from "react-icons/fa6";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { TextLoop } from "easy-react-text-loop";
import { dataBuilding } from "../../mocks/dataBuilding";
import React from "react";
import { Metadata } from "next";
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
      <main className={`flex flex-col space-y-5`}>
        <div
          className={`flex flex-col items-start justify-center px-16 h-[600px] w-full `}
          style={{
            backgroundImage: `url("/images/principal/familyHome.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <div>
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-5 flex flex-col md:flex-row gap-2">
                <div className="mx-2">Somos</div>
                <span className="text-gold">
                  <TextLoop timeout={4000} children={areText} />
                </span>
              </h1>
              <p className="text-white font-montserrat mt-12">
                Conheça agora o melhor Programa de Habitação que chegou na
                cidade de Caieiras e região!
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full relative">
            <img
              className="hidden lg:block mt-40 animate-bounce"
              src="/icons/scroll-down.png"
              width={40}
              height={40}
              alt="role-para-baixo"
            />
          </div>
        </div>
        {/* Empreendimentos */}
        <div className="w-4/5 m-auto">
          <h3 className=" text-4xl  text-center my-10 text-">
            Confira nossas oportunidades
          </h3>
          <section className={"w-4/5 m-auto grid gap-4 grid-cols-1 lg:grid-cols-2"}>
            {dataBuilding.map((b, index) => (
              <div className="m-auto" key={index}>
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
              </div>
            ))}
          </section>
          <section className="flex flex-col justify-center items-center px-28 mb-10 mt-10">
            <div>
              <h2 className="text-3xl  mb-4">
                Como realizar a inscrição no programa habitacional?
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-[300px] bg-zinc-100 rounded-2xl py-8 px-4">
                <div className="flex items-center justify-center flex-col">
                  <FaListUl />
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
              <div className="w-[300px] bg-zinc-100 rounded-2xl  py-8 px-4">
                <div className="flex items-center justify-center flex-col">
                  <FaEdit />
                  <h2 className="text-lg font-semibold mb-4">
                    Processo de inscrição
                  </h2>
                </div>
                <div>
                  <ul className="list-disc ml-4 text-sm space-y-2">
                    <li>
                      Assinatura da Ficha de adesão, Folha de pagamentos,
                      Declação de uso de imagem (se houver permissão) e
                      questionário de confirmação de informações.
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
              <div className="w-[300px] bg-zinc-100 rounded-2xl py-8 px-4">
                <div className="flex items-center justify-center flex-col">
                  <FaCheckCircle />
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
          </section>
        </div>
      </main>
    </>
  );
}
