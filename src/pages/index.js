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

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sua Melhor Escolha para Habitação Segura - Cooperativa Habitacional Diamond</title>
        <meta name="description" content="É seguro ingressar no Programa de Habitação da Cooperativa Habitacional Diamond? Sim, é seguro! O cooperativismo é regulado pela Lei 5.764/1971, proporcionando tranquilidade e confiabilidade aos participantes." />
        <meta property="og:title" content="Cooperativa Habitacional Diamond" />
        <meta property="og:description" content="Descubra por que ingressar na Cooperativa Habitacional Diamond é uma escolha segura e confiável. O cooperativismo é regulado pela Lei 5.764/1971, garantindo tranquilidade aos participantes." />
        <meta
          property="og:url"
          content="https://diamondhabitacional.com.br/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main className={`flex flex-col ${roboto.className} space-y-5`}>
        <div className={`flex flex-col items-start justify-center px-16 h-[600px] w-full ${ inter.className }`} style={{
          backgroundImage: `url("/banners/cooperativismo.jpg")`,
          backgroundSize: "cover"
        }}>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4" >
            <div>
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-5">Somos <span className="text-[#ffd862]">Cooperativismo</span></h1>
              <p className="text-white">Conheça agora o melhor Programa de Habitação que chegou na cidade de Caieiras e região!</p>
            </div>
            {/* Vídeo da Diamond */}
            <div>
              <video className="rounded-xl p-[1px] bg-[#ffd862] w-80 md:w-[420px]" width="420" height="300" autoPlay muted loop>
                <source src="/videos/apresentacao-diamond-video-curta-duracao.mp4" type="video/mp4" />
                <source src="/videos/apresentacao-diamond-video-curta-duracao.webp" type="video/webm" />
                <p className="text-white">Seu navegador não suporta a reprodução de vídeos.</p>
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
        {/* A primeira cooperativa */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 my-12">
            <div className="flex flex-col justify-center space-y-5 mb-5">
              <h2 className="text-3xl font-bold text-[#995522]">A primeira cooperativa do Brasil</h2>
              <p>No brasil, a primeira cooperativa surgiu em 1889, na cidade de Outro Preto, Minas Gerais, com o objetivo de adquirir produtos agrícolas em condições acessíveis para os seus cooperados.</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/principal/igreja.jpg"
                width={360}
                height={304}
                alt="A primeira cooperativa do Brasil"
              />
            </div>
          </div>
        </Section>
        {/* Os 13 ramos */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="flex justify-start">
            <h2 className="text-3xl font-bold text-[#995522] mb-4">Existem 13 ramos no cooperativismo brasileiro</h2>
          </div>
          <div className="flex justify-center items-center my-14">
            <Image
              src="/images/principal/13-ramos-cooperativismo.jpg"
              width={950}
              height={450}
            />
          </div>
        </Section>
        {/* Como funciona */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="flex justify-start">
            <h2 className="text-3xl font-bold text-[#995522] mb-4">Como funciona uma cooperativa habitacional e suas vantagens?</h2>
          </div>
          <div className="flex justify-center mb-5 flex-col space-y-8">
            <p>É de conhecimento de todos que a habitação é um dos principais problemas urbanos a ser solucionado no país. A população de baixa renda, na maioria dos casos, é quem sofre por não ter acesso a uma moradia digna.</p>
            <p>Uma das soluções para essa situação é justamente o cooperativismo habitacional. Dentro desse modelo, os interessados se unem para construir conjuntos habitacionais com parcelas mensais que cabem em seus orçamentos. Isso se deve ao fato do programa não estar atrelado a imobiliárias, construtoras e/ou financeiras, que visam lucro.</p>
            <p>Quem tem interesse em recorrer ao empreendimento na busca pelo imóvel próprio, precisa ter em mente que o objetivo, em geral, parte de um imóvel que ainda será construído. Ou seja, este investimento pode levar alguns anos antes de ser realmente concretizado.</p>
            <p>Isso porque as cooperativas habitacionais trabalham com duas fases: a fase pré-operacional e a fase operacional. Na pré-operacional é elaborado o projeto e o estatuto com todas as suas regras de funcionamento, que deverá ser votado em assembleia. Em seguida, é formado o grupo de associados que participarão dele.</p>
            <p>Caso este percentual for atingido, passa-se para a segunda etapa. Nela são repassados os prazos de entrega, com o início das obras em si. Durante todo o processo, serão realizadas assembleias, nas quais todos os associados têm o mesmo poder de voto.</p>
            <p>Porém, qualquer associado poderá fiscalizar o trabalho realizado se quiser. Em caso de irregularidade, estes conselhos poderão ser desfeitos e reorganizados com outros integrantes. E esta fiscalização é fundamental, afinal, trata-se da gestão de recursos financeiros importantes para os associados.</p>
          </div>
        </Section>
        {/* Vantagens inscrição */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="flex justify-start">
            <h2 className="text-3xl font-bold text-[#995522] mb-4">Quais as vantagens de se inscrever em uma cooperativa habitacional?</h2>
          </div>
          <div className="space-y-8">
            <p>Uma das grandes vantagens de uma cooperativa habitacional é o fato de que todo cooperado é seu dono. A adesão de associados é aberta, pois não há discriminação quanto à raça, religião, sexo, classe ou ideologia de seus interessados.</p>
            <p>O custo final de um empreendimento é praticamente o preço de custo. O que facilita a adesão dos cidadãos menos favorecidos economicamente. Mas isso não quer dizer que somente a população de baixa renda pode se associar à cooperativa.</p>
            <p>As cooperativas são regulamentadas pela Lei nº 5.764, de 16 de dezembro de 1971.</p>
            <ul className="container list-disc">
              <li>Autofinanciamento;</li>
              <li>Ausência de juros;</li>
              <li>Disponibilidade para pessoa física.</li>
            </ul>
            <p>Diferente das incorporadoras, as cooperativas habitacionais são autofinanciadas. Ou seja, o dinheiro que é aplicado é oriundo dos próprios associados.</p>
            <p>Por isso, não há a cobrança das taxas de juros encontradas no financiamento imobiliário tradicional. Isso porque não há necessidade de obtenção de lucro com estas transações. Com isso, o preço dos imóveis cooperados fica abaixo da média de mercado.</p>
          </div>
        </Section>
        {/* CTA 1 */}
        <Section className="flex flex-col bg-[#C79C4D20] h-96 items-center justify-center item space-y-8 p-6">
          <div>
            <h2 className="text-center text-3xl font-bold text-[#995522] mb-4">É seguro participar do Programa de habitação da Cooperativa Habitacional Diamond?</h2>
          </div>
          <div>
            <a className="border-[#995522] border-2 rounded-full py-3 px-8 text-[#995522] font-semibold" href="https://wa.me/5511953493313" target="_blank">A resposta é sim!</a>
          </div>
        </Section>
        {/* Sobre a lei 5764/1971 */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="space-y-8">
            <p>O Cooperativismo esta regulado pela Lei 5.764/1971, importante mencionar que a Diamond inclusive esta registrada na OCESP (Organização de Cooperativas do Estado de São Paulo).</p>
            <p>A Cooperativa traz excelentes oportunidades de conquistar o sonho da casa própria por meio do sistema de cooperativa habitacional, que é uma sociedade de pessoas com o objetivo de realizar sonhos, neste caso, O DA CASA PRÓPRIA.</p>
          </div>
        </Section>
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="flex justify-start">
            <h2 className="text-3xl font-bold text-[#995522] mb-4">O que diz a Lei 5.764/1971?</h2>
          </div>
          <div className="space-y-8">
            <p>Associação de pessoas que reciprocamente se obrigam a contribuir com bens ou serviços para o exercício de uma atividade econômica, de proveito comum, sem objetivo de lucro.</p>
            <p>As cooperativas são sociedades de pessoas, com forma e natureza jurídica próprias, de natureza civil, não sujeitas a falência, constituídas para prestar serviços aos associados, distinguindo-se das demais sociedades pelas seguintes características:</p>
            <ul className="container list-decimal ml-5 space-y-4">
              <li>Adesão voluntária;</li>
              <li>Variabilidade do capital social representado por quotas-partes;</li>
              <li>Limitação do número de quotas-partes do capital para cada associado;</li>
              <li>Inacessibilidade das quotas-partes do capital a terceiros, estranhos à sociedade;</li>
              <li>Singularidade de voto, podendo as cooperativas centrais, federações e confederações de cooperativas, com exceção das que exerçam atividade de crédito, optar pelo critério da proporcionalidade;</li>
              <li>Quórum para o funcionamento e deliberação da Assembleia Geral baseado no número de associados e não no capital;</li>
              <li>Retorno das sobras líquidas do exercício, proporcionalmente às operações realizadas pelo associado, salvo deliberação em contrário da Assembleia Geral;</li>
              <li>Indivisibilidade dos fundos de Reserva e de Assistência Técnica Educacional e Social;</li>
              <li>Neutralidade política e indiscriminação religiosa, racial e social;</li>
              <li>Prestação de assistência aos associados;</li>
              <li>Área de admissão de associados limitada às possibilidades de reunião, controle, operações e prestação de serviços.</li>
            </ul>
            <ul className="space-y-2 my-4">
              <li>O cooperativismo é visto por muitas pessoas como uma grande oportunidade de empreender.</li>
              <li>Por meio dele várias pessoas e grupos se associam e se ajudam em busca de desenvolvimento e vantagens econômicas que permitam manter a competitividade no mercado.</li>
              <li>O principal objetivo desse conceito não é o lucro, mas sim promover avanços econômicos e sociais, o que proporciona ganhos para toda a sociedade.</li>
              <li>E para que as cooperativas atuem de forma mais organizada, visando benefícios para todos os envolvidos, foram criadas as Leis do Cooperativismo.</li>
            </ul>
          </div>
        </Section>
        {/* Diferencial */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div className="flex justify-start">
            <h2 className="text-3xl font-bold text-[#995522] mb-4">Qual o diferencial da Cooperativa Habitacional Diamond?</h2>
          </div>
          <div className="space-y-8">
            <p>Na nossa cooperativa as áreas adquiridas para construção são negociadas via permuta, ou seja, o valor arrecadado no início das inscrições não são destinados para pagamento de terreno e sim para o início de obras. Com este adiantamento de processo, nossos projetos são protocolados na prefeitura logo após abertas as inscrições, o cooperado consegue facilmente consultar através de um passo a passo que enviamos e com os dados necessários para consulta.</p>
            <p>O investimento do cooperado, se aplica somente à pagamento de projetos, dos profissionais responsáveis por todo processo de obras, da mão de obra e material necessários para a construção tanto das unidades autonômas, quanto de toda infraestrutura do condomínio residencial.</p>
          </div>
        </Section>
        {/* Requisitos */}
        <Section className="flex flex-col px-8 lg:px-28">
          <div>
            <h2 className="text-3xl font-bold text-[#995522] mb-4">Quais os requisitos para se inscrever no programa habitacional?</h2>
          </div>
          <div>
            <ul className="list-disc ml-5">
              <li>Idade mínima 18 anos de idade.</li>
              <li>Não exigimos renda miníma, apenas comprovação de renda pois o Ministério Pública solicita.</li>
              <li>Não precisa ter nome limpo, não consultamos SPC / SERASA.</li>
            </ul>
          </div>
        </Section>
        {/* Sobre inscrição */}
        <Section className="flex flex-col justify-center items-center px-28">
          <div>
            <h2 className="text-3xl font-bold text-[#995522] mb-4">Como realizar a inscrição no programa habitacional?</h2>
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
                <h2 className="text-lg font-semibold mb-4">Documentação necessária</h2>
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
                <h2 className="text-lg font-semibold mb-4">Processo de inscrição</h2>
              </div>
              <div>
                <ul className="list-disc ml-4 text-sm space-y-2">
                  <li>Assinatura da Ficha de adesão, Folha de pagamentos, Declação de uso de imagem (se houver permissão) e questionário de confirmação de informações.</li>
                  <li>Assinatura do Termo de adesão (contrato) em duas vias de igual teor.</li>
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
                <h2 className="text-lg font-semibold mb-4">Inscrição realizada</h2>
              </div>
              <div>
                <ul className="list-disc ml-4 text-sm space-y-2">
                  <li>Acompanhamento das obras atualizadas via site / redes sociais.</li>
                  <li>Assessoria contínua com nossos consultores.</li>
                  <li>Canal financeiro disponível para os cooperados.</li>
                  <li>Assembléias anuais.</li>
                  <li>Assembléia de contemplação para entrega das chaves.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        {/* CTA 2 */}
        <Section className="text-[#41220B]" style={{
            background: `linear-gradient(180deg, rgba(65, 34, 11, 0) 0%, rgba(65, 34, 11, 0.88) 75.6%), url(/images/principal/conheca-nossos-empreendimentos.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="h-[500px] flex flex-col justify-center items-center p-6">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold mb-4">Junte-se ao movimento e conheça nossos empreendimentos</h2>
              <p>Conheça nossos empreendimentos na Cidade de Caieiras e faça parte desse grande movimento que é o Programa de Habitação da Cooperativa Habitacional Diamond!</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
              <a className="bg-transparent border-[#C79C4D] border-[2px] rounded px-16 py-3 text-white text-center font-semibold" href="https://wa.me/5511953493313">Empreendimentos</a>
              <Link className="bg-[#C79C4D] border-[#C79C4D] border-[2px] rounded px-16 py-3 text-center text-[#1E1E1E] font-semibold" href="/contato">Fale conosco</Link>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
