import Image from "next/image";
import Link from "next/link";
import { moveUp } from "@/utils/move-up";

export default function Footer() {
  return (
    <>
      <div onClick={moveUp} className="flex justify-center items-center h-12 bg-zinc-900 text-zinc-500 cursor-pointer">Ir para o topo ☝️</div>
      <footer className="flex flex-col bg-black text-white px-8 md:px-28 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 min-h-full pb-5 space-y-4">
          <div>
            <h4 className="text-xl text-white font-semibold mb-4 mt-3">Navegação</h4>
            <ul>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="/projetos">Projetos</Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="/">Cooperativa</Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="/noticias">Notícias</Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="/cooperados">Cooperados</Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          {/* <div className="pl-8">
            <h4 className="text-xl text-white font-semibold mb-4">Cliente</h4>
            <ul>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="#">Acessar sistema</Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="#">Meus boletos</Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="#">Painel do cliente</Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-4">
              Fale Conosco
            </h4>
            <ul>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="https://api.whatsapp.com/send?phone=5511953493313">
                  Atendimento
                </Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="mailto:cooperativa@diamondhabitacional.com.br">
                  Enviar e-mail
                </Link>
              </li>
              <li>
                <Link className="text-zinc-300 hover:text-white no-underline" href="https://api.whatsapp.com/send?phone=5511953493313">
                  Agendar uma visita
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-4">
              Mais que sonhar, é realizar!
            </h4>
            <Image
              src="/logos/diamond.png"
              width={119}
              height={50}
              alt="Diamond Habitacional"
            />
            <p className="mt-5 text-zinc-300">CNPJ 47.434.066/0001-53</p>
          </div>
        </div>
        {/* Direitos e política */}
        <div className="flex flex-row justify-between items-center flex-1 flex-wrap">
          <p>
            <Link
              className="text-zinc-300 hover:text-white no-underline"
              href="/politica-de-privacidade"
            >
              Política de privacidade
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link
              className="text-zinc-300 hover:text-white no-underline"
              href="/termos-de-uso"
            >
              Termos de uso
            </Link>
          </p>
          <p>
            <span className="font-bold">Habitacional Diamond</span> 2022 © Todos
            os direitos reservados&nbsp;&nbsp;|&nbsp;&nbsp;Feito com 💛 por{" "}
            <span className="font-bold">
              <Link className="text-yellow-300 no-underline" href="https://itinnovation.com.br" target="_blank">
                IT Innovation
              </Link>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
