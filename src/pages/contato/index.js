import Head from "next/head";
import Image from "next/image";

import Banner from "@/components/Banner"

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="Entre em contato conosco na Diamond Habitacional. Estamos aqui para responder às suas perguntas, fornecer informações detalhadas sobre nossos programas de habitação e ajudá-lo a dar o primeiro passo em direção ao seu sonho da casa própria." />
        <meta property="og:title" content="Fale com a Diamond" />
        <meta property="og:description" content="Estamos à disposição para responder às suas perguntas, fornecer informações detalhadas sobre nossos programas de habitação e ajudá-lo a dar o primeiro passo em direção ao seu sonho da casa própria. Contate-nos hoje mesmo." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/contato"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Banner
          imagePath="/banners/contato.jpg"
          title="Contato"
          text="Conheça agora o melhor Programa de Habitação que chegou na cidade de Caieiras e região!"
        />
        <div className="flex flex-col justify-between items-center md:flex-row mt-12 mb-8 px-8 md:px-32 gap-8">
          <div className="md:mt-16 md:w-1/2">
            {/* Endereço */}
            <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4 space-y-4">
              <div>
                <Image
                  src="/icons/endereco.png"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <div>Rua Anu, 60</div>
                <div>Laranjeiras, Caieiras - SP</div>
                <div>CEP: 07745-180</div>
              </div>
            </div>
            {/* WhatsApp */}
            <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4 space-y-4">
              <div>
                <Image
                  src="/icons/whatsapp.png"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <a className="text-[#995522]" href="https://wa.me/5511953493313" target="_blank">(11) 95233-1093</a>
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4 space-y-4">
              <div>
                <Image
                  src="/icons/email.png"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <a className="text-[#995522]" href="mailto:cooperativa@diamondhabitacional.com.br" target="_blank">cooperativa@diamondhabitacional.com.br</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form action="https://formsubmit.co/cooperativa@diamondhabitacional.com.br" method="POST" className="w-full">
              <input type="hidden" name="_subject" value="Novo contato através do site" />
              <input type="hidden" name="_next" value="http://localhost:3000/contato/agradecimento"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <h2 className="text-3xl font-bold text-[#995522] mb-5">Fale conosco</h2>
              <div>
                <input type="text" className="rounded bg-[#ececec]" placeholder="Nome" name="Nome" />
              </div>
              <div>
                <input type="email" className="rounded bg-[#ececec] mt-10" placeholder="Email" name="Email" />
              </div>
              <div>
                <input type="text" className="rounded bg-[#ececec] mt-10" placeholder="Telefone" name="Telefone" />
              </div>
              <div>
                <textarea className="rounded bg-[#ececec] mt-10" placeholder="Mensagem" name="Mensagem" />
              </div>
              <div className="my-4">
                <button onClick={() => handleClick()} className="rounded-lg" style={{ width: "10rem", height: "3rem", backgroundColor: "#995522", color: "white" }}>Enviar</button>
              </div>
            </form>
          </div>
        </div>
        {/* Iframe com a localização da Diamond */}
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.057139463369!2d-46.723402096530194!3d-23.383991033355574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee4cdc7aaae07%3A0xb70e424f34de2537!2sR.%20Anu%2C%2060%20-%20Laranjeiras%2C%20Caieiras%20-%20SP%2C%2007700-000!5e0!3m2!1spt-BR!2sbr!4v1688182180288!5m2!1spt-BR!2sbr" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </>
  );
}
