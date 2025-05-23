'use client'

import { SlLocationPin } from 'react-icons/sl';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiWhatsappLine } from "react-icons/ri";
import useWindowDimensions from 'utils/useWindows';

const CristalPage = () => {
    const { width } = useWindowDimensions();

    return (
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
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-yellow-700 mb-4 text-center md:text-left">Residencial Cristal</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            A Diamond está chegando ao ABC, trazendo a você e a sua família a melhor oportunidade de ter seu imóvel próprio.
                            Conforto, segurança e lazer, em umas das melhores regiões metropolitanas do estado de SP.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Venha conhecer nosso empreendimento e realizar sua inscrição e adesão ao programa habitacional do Residencial Cristal!
                        </p>
                        <a
                            href="https://wa.me/5511993983532"
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
                                Av Capitão João, 70 - Mauá, Centro - SP
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.209493933678!2d-46.46491192460876!3d-23.668465065535862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6968bc445293%3A0xda2df492a469722f!2sAv.%20Cap.%20Jo%C3%A3o%2C%2070%20-%20Matriz%2C%20Mau%C3%A1%20-%20SP%2C%2009360-120!5e0!3m2!1spt-BR!2sbr!4v1714265039304!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="320"
                            style={{ border: 0 }}
                            loading="lazy"
                            className="rounded-2xl shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CristalPage