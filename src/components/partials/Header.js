import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Icones
 */
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail, HiMenuAlt1 } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function toggleSubmenuFromProjects() {
    setSubMenuOpen(!subMenuOpen);
  }

  return (
    <header className="w-full mx-auto text-zinc-300">
      {/* Sub header */}
      {/* <div className="hidden md:flex flex-row items-center justify-between py-2 bg-[#995522] px-10">
        <div>
          <ul className="flex justify-center items-center space-x-5">
            <li className="hover:text-white">
              <a
                className="flex items-center gap-1 text-white no-underline"
                href="tel:11953493313"
              >
                <AiFillPhone /> 11 9 5349-3313
              </a>
            </li>
            <li className="hover:text-white">
              <a
                className="flex items-center no-underline gap-1 text-white"
                href="mailto:comercial@diamondhabitacional.com.br"
              >
                <HiOutlineMail /> comercial@diamondhabitacional.com.br
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-3 text-white">
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100094194120286" target="_blank">
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/diamondhabitacional/" target="_blank">
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/diamondhabitacional/" target="_blank">
                <BsWhatsapp />
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* Master header */}
      <div className="flex items-center px-10 bg-black h-[64px] justify-between">
        {/* Logo da Diamond */}
        <span className="mr-5">
          <Link href="/">
            <Image
              src="/logos/diamond.png"
              width={100}
              height={39}
              alt="Diamond Habitacional"
            />
          </Link>
        </span>
        <button onClick={toggleMenu}>
          <HiMenuAlt1 className="w-6 h-6 lg:hidden md:flex sm:flex" />
        </button>
        <div
          className={`${
            open
              ? "flex top-16 sm:top-16 md:top-[104px] px-12 absolute bg-zinc-900 flex-col w-full left-0"
              : "hidden lg:flex w-full items-center justify-between"
          }`}
        >
          <nav className={`${open ? "flex-1 my-5" : "flex items-center h-16"}`}>
            <ul className={`flex ${open ? "flex-col" : "flex-row space-x-6 px-8"}`}>
              <li className={`${open ? "py-2" : "py-0"} hover:text-white`}>
                <Link href="/" className="no-underline text-white">
                  Cooperativa
                </Link>
              </li>
              {/* <li
                className={`${open ? "py-2" : "py-0"} hover:text-white`}
                onClick={toggleSubmenuFromProjects}
              >
                <Link href="#" className="no-underline text-white relative">
                  Projetos
                  <span className="absolute w-[6px] h-[6px] bg-red-500 rounded-full -top-0 left-16">&nbsp;&nbsp;</span>
                </Link>
                {subMenuOpen && (
                  <ul className="absolute bg-zinc-900 text-white space-y-3 p-4 mt-[20px] rounded-b-2xl">
                    <li>
                      <Link
                        href="/projetos/residencial-safira"
                        className="no-underline text-white"
                      >
                        Residêncial Safira
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projetos/residencial-topazio"
                        className="no-underline text-white"
                      >
                        Residêncial Topázio
                        <sup className="bg-red-500 p-1 rounded-lg m-1 text-xs">Novo</sup>
                      </Link>
                    </li>
                  </ul>
                )}
              </li> */}
              <li className={`${open ? "py-2" : "py-0"} hover:text-white`}>
                <Link href="/noticias" className="no-underline text-white">
                  Notícias
                </Link>
              </li>
              {/* <li className={`${open ? "py-2" : "py-0"} hover:text-white`}>
                <Link href="/cooperados" className="no-underline text-white">
                  Cooperados
                </Link>
              </li> */}
              <li className={`${open ? "py-2" : "py-0"} hover:text-white`}>
                <Link href="/contato" className="no-underline text-white">
                  Contato
                </Link>
              </li>
              <li className={`${open ? "py-2" : "py-0"} hover:text-white`}>
                <Link href="/quem-somos" className="no-underline text-white">
                  Quem Somos
                </Link>
              </li>
            </ul>
          </nav>
          {/* {!open && (
            <Link
              // className="bg-[#ffd862] no-underline text-black font-bold rounded-full px-3 py-1.5"
              href="#"
              // target="_blank"
            >
              Área do Cooperado
              <sup className="bg-red-500 text-white p-1 rounded-lg m-1 text-xs">Em breve</sup>
            </Link>
          )} */}
        </div>
      </div>
    </header>
  );
}
