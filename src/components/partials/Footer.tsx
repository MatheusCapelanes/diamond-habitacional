import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-6 bg-black text-white px-4 md:px-28 py-8">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-zinc-300 font-semibold">Cooperativa Habitacional Diamond</p>
        <p className="hidden sm:block text-zinc-300">CNPJ 47.434.066/0001-53</p>
      </div>
      <nav aria-label="Redes sociais">
        <ul className="flex text-2xl gap-5">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100095603408430"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/diamondhabitacional/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5511953493313"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-wrap gap-2 text-center md:text-right">
        <Link
          className="text-zinc-300 hover:text-white no-underline transition-colors"
          href="/politica-de-privacidade"
        >
          Política de privacidade
        </Link>
        <span className="text-zinc-500">|</span>
        <Link
          className="text-zinc-300 hover:text-white no-underline transition-colors"
          href="/termos-de-uso"
        >
          Termos de uso
        </Link>
      </div>
    </footer>
  );
}