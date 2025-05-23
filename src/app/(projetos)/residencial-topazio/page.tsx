'use client'

import { SlLocationPin } from 'react-icons/sl';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiWhatsappLine } from "react-icons/ri";
import useWindowDimensions from 'utils/useWindows';

const TopazioPage = () => {
    const { width } = useWindowDimensions();
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12">
                <div className="mb-8">
                    <Carousel
                        autoFocus
                        infiniteLoop
                        centerMode
                        centerSlidePercentage={width > 768 ? 50 : 100}
                        swipeable
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={true}
                        className="rounded-2xl shadow-lg"
                    >
                        {[...Array(15)].map((_, i) => (
                            <div key={i}>
                                <img
                                    className="rounded-2xl object-cover h-80 w-full p-2"
                                    src={`/images/residencial-topazio/${i + 1}.png`}
                                    alt={`Residencial Topázio ${i + 1}`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="flex flex-col gap-8 items-start">
                    <div className="flex-1 w-full">
                        
                        <h1 className="text-3xl font-bold text-yellow-700 mb-4 text-center md:text-left">Residencial Topázio</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            O melhor 2 dormitórios em Caieiras. Cooperativismo de alta qualidade. Conheça o lançamento Residencial Topázio, casas geminadas de 75 metros quadrados, condomínio fechado com vaga de garagem privativa e mais.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Descubra o Residencial Topázio em Caieiras. Casas geminadas de 2 dormitórios em condomínio fechado, com vaga de garagem privativa e mais. Sua nova moradia de qualidade está aqui.
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
                                Rua Anu, 60 - Laranjeiras, Caieiras - SP
                            </span>
                        </div>
                        
                    </div>
                    <div className="flex-1 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.057139463369!2d-46.723402096530194!3d-23.383991033355574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee4cdc7aaae07%3A0xb70e424f34de2537!2sR.%20Anu%2C%2060%20-%20Laranjeiras%2C%20Caieiras%20-%20SP%2C%2007700-000!5e0!3m2!1spt-BR!2sbr!4v1688182180288!5m2!1spt-BR!2sbr"
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

export default TopazioPage