import Link from "next/link";
import { moveUp } from "@/utils/move-up";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div
        onClick={moveUp}
        className="flex justify-center items-center h-12 bg-zinc-900 text-zinc-500 cursor-pointer"
      >
        Ir para o topo ☝️
      </div>
      <footer className="flex flex-col md:flex-row justify-between gap-3 items-center bg-black text-white px-4 md:px-28 py-8">
        <div className="min-h-full space-y-4">
          <p className="text-zinc-300">Cooperativa Habitacional Diamond</p>
          <p className="max-sm:hidden text-zinc-300">CNPJ 47.434.066/0001-53</p>
        </div>
        <div>
          <ul className="flex text-2xl gap-5">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100095603408430"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/diamondhabitacional/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5511953493313&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
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
        </div>
      </footer>
    </>
  );
}
