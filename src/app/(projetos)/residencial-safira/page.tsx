'use client';
import Head from "next/head";
import { RiWhatsappLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import SafiraCarousel from "@/components/SafiraCarousel";
import { Carousel } from "react-responsive-carousel";
import useWindowDimensions from "../../../../utils/useWindows";

export default function ResidencialSafira() {
  const { width } = useWindowDimensions();


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12">
          <div className="mb-8">
            <Carousel
              autoFocus
              infiniteLoop
              centerMode
              centerSlidePercentage={width > 768 ? 60 : 100}
              swipeable
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              className="rounded-2xl shadow-lg"
            >
              {[...Array(12)].map((_, i) => (
                <div key={i}>
                  <img
                    src={`images/residencial-cristal/${i + 1}.png`}
                    alt={`Torre Cristal ${i + 1}`}
                    className="rounded-2xl object-cover h-80 w-full p-2"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-col gap-8 items-start">
            <div className="flex-1 w-full">
              <h1 className="text-3xl font-bold text-yellow-700 mb-4 text-center md:text-left">
                Residencial Safira
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                O melhor 3 dormitórios em Caieiras! Cooperativismo de alto padrão para sua família. Revolucione sua moradia hoje mesmo.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Apartamentos de 80 metros quadrados, 3 dormitórios com 1 suíte e ampla varanda gourmet, opção 1 ou 2 vagas de garagem cobertas, pontos de ar-condicionado entregues e opção living ampliado.
              </p>
              <a
                href="https://wa.me/5511953493313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold w-full md:w-auto mb-6"
              >
                <RiWhatsappLine size={28} />
                Entre em contato conosco pelo WhatsApp
              </a>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-lg p-4 shadow mb-6">
                <SlLocationPin className="text-yellow-700" size={24} />
                <span className="text-gray-800 font-medium">
                  Rua das Safiras, Jardim Europa, Caieiras - SP
                </span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.393384366983!2d-46.740000!3d-23.390000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee4cdc7aaae07%3A0xb70e424f34de2537!2sJardim%20Europa%2C%20Caieiras%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1688182180288!5m2!1spt-BR!2sbr"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-2xl shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}