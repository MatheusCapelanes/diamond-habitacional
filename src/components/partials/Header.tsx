'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail, HiMenuAlt1 } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const toggleSubmenuFromProjects = () => setSubMenuOpen((prev) => !prev);

  return (
    <header className="w-full mx-auto text-zinc-300">
      {/* Sub header */}
      {/* 
      <div className="hidden md:flex flex-row items-center justify-between py-2 bg-[#995522] px-10">
        <ul className="flex items-center space-x-5">
          <li>
            <a href="tel:11953493313" className="flex items-center gap-1 text-white hover:text-white no-underline">
              <AiFillPhone /> 11 9 5349-3313
            </a>
          </li>
          <li>
            <a href="mailto:comercial@diamondhabitacional.com.br" className="flex items-center gap-1 text-white hover:text-white no-underline">
              <HiOutlineMail /> comercial@diamondhabitacional.com.br
            </a>
          </li>
        </ul>
        <ul className="flex space-x-3 text-white">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100094194120286" target="_blank" rel="noopener noreferrer">
              <BsFacebook />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/diamondhabitacional/" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/5511953493313" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp />
            </Link>
          </li>
        </ul>
      </div>
      */}
      {/* Master header */}
      <div className="flex items-center px-6 md:px-10 bg-black h-16 justify-between relative">
        {/* Logo */}
        <Link href="/" className="mr-5 flex-shrink-0" aria-label="Página inicial">
          <Image
            src="/logos/diamond.png"
            width={100}
            height={39}
            alt="Diamond Habitacional"
            priority
          />
        </Link>
        {/* Botão menu mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ffd862]"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <HiMenuAlt1 className="w-6 h-6" />
        </button>
        {/* Menu */}
        <nav
          className={`
            ${open
              ? "flex flex-col absolute top-16 left-0 w-full bg-zinc-900 px-8 py-6 z-20"
              : "hidden lg:flex flex-row items-center w-full justify-end"
            }
          `}
        >
          <ul className={`flex ${open ? "flex-col gap-4" : "flex-row gap-8"}`}>
            <li>
              <Link href="/" className="no-underline text-white hover:text-[#ffd862] transition-colors">
                Cooperativa
              </Link>
            </li>
            {/* 
            <li className="relative">
              <button
                onClick={toggleSubmenuFromProjects}
                className="no-underline text-white hover:text-[#ffd862] transition-colors flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={subMenuOpen}
              >
                Projetos
                <span className="w-2 h-2 bg-red-500 rounded-full ml-2" />
              </button>
              {subMenuOpen && (
                <ul className="absolute left-0 mt-2 bg-zinc-900 text-white rounded-b-2xl shadow-lg p-4 space-y-2 z-30">
                  <li>
                    <Link href="/projetos/residencial-safira" className="no-underline text-white hover:text-[#ffd862]">
                      Residencial Safira
                    </Link>
                  </li>
                  <li>
                    <Link href="/projetos/residencial-topazio" className="no-underline text-white hover:text-[#ffd862]">
                      Residencial Topázio
                      <sup className="bg-red-500 p-1 rounded-lg m-1 text-xs text-white">Novo</sup>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            */}
            {/* 
            <li>
              <Link href="/noticias" className="no-underline text-white hover:text-[#ffd862] transition-colors">
                Notícias
              </Link>
            </li>
            <li>
              <Link href="/cooperados" className="no-underline text-white hover:text-[#ffd862] transition-colors">
                Cooperados
              </Link>
            </li>
            */}
            <li>
              <Link href="/contato" className="no-underline text-white hover:text-[#ffd862] transition-colors">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className="no-underline text-white hover:text-[#ffd862] transition-colors">
                Quem Somos
              </Link>
            </li>
          </ul>
          {/* 
          {!open && (
            <Link
              href="#"
              className="bg-[#ffd862] no-underline text-black font-bold rounded-full px-3 py-1.5 ml-6"
            >
              Área do Cooperado
              <sup className="bg-red-500 text-white p-1 rounded-lg m-1 text-xs">Em breve</sup>
            </Link>
          )}
          */}
        </nav>
      </div>
    </header>
  );
}