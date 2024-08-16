'use client'

import { SlLocationPin } from 'react-icons/sl';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiWhatsappLine } from "react-icons/ri";
import useWindowDimensions from 'utils/useWindows';


const TopazioPage = () => {
    const { width } = useWindowDimensions();
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
                        <img className='p-2' src="/images/residencial-topazio/1.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/2.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/3.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/4.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/5.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/6.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/7.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/8.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/9.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/10.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/11.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/12.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/13.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/14.png" alt="Torre Cristal" />
                    </div>
                    <div>
                        <img className='p-2' src="/images/residencial-topazio/15.png" alt="Torre Cristal" />
                    </div>

                </Carousel>
            </div>
            <div className=''>
                <div className='m-4 lg:w-2/5 md:m-auto '>
                    <a href="https://wa.me/5511953493313" className='flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-lg'>
                        <RiWhatsappLine />
                        <p>Entre em contato conosco pelo WhatsApp</p>
                    </a>
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl text-center my-8'>Residencial Topázio</h1>
                    <p className='p-8'>
                        O melhor 2 dormitórios em Caieiras. Cooperativismo de alta qualidade. Conheça o lançamento Residencial Topázio, casas geminadas de 75 metros quadrados, condomínio fechado com vaga de garagem privativa e mais.
                    </p>
                    <p className='p-8'>
                        Descubra o Residencial Topázio em Caieiras. Casas geminadas de 2 dormitórios em condomínio fechado, com vaga de garagem privativa e mais. Sua nova moradia de qualidade está aqui.
                    </p>
                    <div className="flex flex-col mb-8">
                        <div className="my-8">
                            <div className="flex items-center gap-2 p-8">
                                <SlLocationPin />
                                <p>Rua Anu, 60 - Laranjeiras, Caieiras - SP</p>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.057139463369!2d-46.723402096530194!3d-23.383991033355574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee4cdc7aaae07%3A0xb70e424f34de2537!2sR.%20Anu%2C%2060%20-%20Laranjeiras%2C%20Caieiras%20-%20SP%2C%2007700-000!5e0!3m2!1spt-BR!2sbr!4v1688182180288!5m2!1spt-BR!2sbr"
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

export default TopazioPage

function useState(arg0: { width: number; height: number; }): [any, any] {
    throw new Error('Function not implemented.');
}
