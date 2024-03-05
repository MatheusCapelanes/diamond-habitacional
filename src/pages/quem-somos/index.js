import Head from "next/head";

import Banner from "@/components/Banner";
import Link from "next/link";

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Quem Somos - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="Conheça a Cooperativa Habitacional em que torna o sonho da casa própria uma realidade através do cooperativismo. Junte-se a nós para alcançar seus objetivos de moradia com segurança e economia" />
        <meta property="og:title" content="Quem Somos" />
        <meta property="og:description" content="Junte-se à nossa cooperativa habitacional e torne realidade o sonho da casa própria através do cooperativismo. Garantia de segurança e economia para você e sua família." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/quem-somos"
        />
      </Head>
      <main>
        <Banner
          imagePath="/banners/quem-somos.jpg"
          title="Quem Somos"
          text="Cooperativa habitacional que busca realizar o sonho da casa própria através do cooperativismo"
        />
        <div className="p-16">
          <div className="p-8">
            <p className="text-start mb-6">A Diamond é uma Cooperativa Habitacional, e sua essência é a ajuda mútua para a realização do sonho da casa própria. Para que isso aconteça, os cooperados contribuem mensalmente com valor monetário para que seja possível a construção das unidades habitacionais. Porém, sem intermediários e sem objetivar lucro algum.</p>
            <p className="text-start mb-6"><strong>O cooperativismo é um modelo muito popular no exterior</strong>, e apesar de já existir no Brasil desde 1889, poucas pessoas tem acesso à esta oportunidade, a Cooperativa Habitacional Diamond foi criada para alcançar mais pessoas na esperança de um dia tornar este modelo o programa de habitação mais procurado devido suas grandes vantajens.</p>
            <p>Trabalhando em prol das famílias desde junho de 2021, nossa cooperativa iniciou suas atividades na cidade de Caieiras, nosso objetivo com a entrega de moradia é alcançar todos os públicos, cada projeto tem seu diferencial, assim como é o nosso propósito, oferecer opções onde o cooperado tem a oportunidade de escolher entre um, dois ou <Link className="text-[#995522] font-semibold" href="/projetos/residencial-safira" target="_blank">3 dormitórios</Link>, desde apartamentos compactos à maiores, e à <Link className="text-[#995522] font-semibold" href="/projetos/residencial-topazio" target="_blank">sobrados residenciais</Link>.</p>
          </div>
          <div className="p-8">
            <h2 className="text-3xl text-center font-bold text-[#995522] mb-4">Missão</h2>
            <p>Dar oportunidade à pessoas que trabalham duro para ter uma vida melhor, de conquistarem sua moradia de maneira digna e com todas facilidades que oferecemos, nossa missão é facilitar todo <strong>processo da aquisição de um lar</strong>.</p>
          </div>
          <div className="p-8">
            <h2 className="text-3xl text-center font-bold text-[#995522] mb-4">Visão</h2>
            <p>Acreditamos que todos Brasileiros deveriam ter conhecimento e acesso à este incrível programa habitacional que é a cooperativa, onde juntos somos mais fortes, um grupo unido com o mesmo objetivo.</p>
          </div>
          <div className="p-8">
            <h2 className="text-3xl text-center font-bold text-[#995522] mb-4">Valores</h2>
            <p>Defendemos a transparência, honestidade, humildade e trabalho árduo. Respeitamos as diferenças e apoiamos a diversidade de pessoas, pois como grupo, as diferenças nos tornam um só. Acreditamos na união, na esperança, e na fé. Apoiamos a coletividade, a igualdade de direitos, o respeito mútuo e o desejo de crescimento pessoal e profissional.</p>
          </div>
        </div>
      </main>
    </>
  );
}
