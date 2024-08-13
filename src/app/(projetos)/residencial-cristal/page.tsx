'use client'

import { SlLocationPin } from 'react-icons/sl';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiWhatsappLine } from "react-icons/ri";


const CristalPage = () => {
    const width = window.innerWidth
    console.log(width)
    return (
        <div className=''>

            <div className='mb-4 bg-black p-8' >
                <Carousel
                    // dynamicHeight
                    autoFocus
                    infiniteLoop
                    centerMode
                    centerSlidePercentage={width > 768 ? 40 : 120}
                    swipeable
                >
                    <div>
                        <img src="images/residencial-cristal/1.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/2.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/3.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/4.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/5.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/6.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/7.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/8.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/9.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/10.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/11.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img src="images/residencial-cristal/12.png" alt="Torre Cristal" />
                    </div>
                </Carousel>
            </div>
            <div className=''>
                <div className='m-4 lg:w-2/5 md:m-auto '>
                    <a href="https://wa.me/5511993983532" className='flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-lg'>
                        <RiWhatsappLine />
                        <p>Entre em contato conosco pelo WhatsApp</p>
                    </a>
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl text-center my-8'>Residencial Cristal</h1>
                    <p className='p-8'>
                        A Diamond está chegando ao ABC, trazendo a você e a sua família a melhor oportunidade de ter seu imóvel próprio.
                        Conforto, segurança e lazer, em umas das melhores regiões metropolitana do estado de SP.
                    </p>
                    <p className='p-8'>
                        Venha conhecer nosso empreendimento e realizar sua inscrição e adesão ao programa habitacional do Residencial Cristal !
                    </p>
                    <div className="flex flex-col mb-8">
                        <div className="my-8">
                            <div className="flex items-center gap-2 p-8">
                                <SlLocationPin />
                                <p>Av Capitão João, 70 - Mauá, Centro - SP</p>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.209493933678!2d-46.46491192460876!3d-23.668465065535862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6968bc445293%3A0xda2df492a469722f!2sAv.%20Cap.%20Jo%C3%A3o%2C%2070%20-%20Matriz%2C%20Mau%C3%A1%20-%20SP%2C%2009360-120!5e0!3m2!1spt-BR!2sbr!4v1714265039304!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CristalPage