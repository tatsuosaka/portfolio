"use client";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Projects from "./projects";

export default function Article() {
    const [clicked, setClicked] = useState<boolean>(false);

    function copyEmail() {
        const email = "matheus.tats@gmail.com";
        const emailButton = document.getElementById("email");
        navigator.clipboard.writeText(email);
        if (emailButton) {
            emailButton.innerText = `Copiado`;
        }
        setTimeout(() => {
            if (emailButton) {
                emailButton.innerText = email;
            }
        }, 1500);
    }
    return (
        <article className="flex flex-col gap-6 justify-between items-center lg:size-2/4 sm:size-2/3 size-10/12 mt-2">
            <div className="bg-zinc-900/40 p-4 rounded text-center w-full">
                <p>Olá! sou desenvolvedor web e editor de vídeos! 😁</p>
            </div>
            <div className="flex gap-4 justify-between items-center w-full">
                <div>
                    <h2 className="text-4xl">Matheus Tatsuo Saka</h2>
                    <p>Desenvolvedor / Editor de vídeos / Artista </p>
                </div>
                <Image
                    className="rounded-full border-2 select-none border-white"
                    src={"/images/perfil.webp"}
                    alt="profile"
                    width={140}
                    height={140}
                />
            </div>
            <div id="sobre">
                <h2 className="text-2xl font-bold underline mb-4">Sobre</h2>
                <p className="mb-4">
                    Me chamo Matheus Tatsuo Saka, formado em Análise e
                    Desenvolvimento de Sistemas, apaixonado pelo desenvolvimento
                    web. Com sólida experiência em HTML, CSS, JavaScript,
                    TypeScript, destaco-me também em Next.js, React e
                    TailwindCSS.
                </p>
                <p>
                    Também possuo habilidades em design com Photoshop e Figma,
                    além de edição de vídeo com CapCut e DaVinci Resolve. Estou
                    sempre em busca de desafios para expandir meu conhecimento e
                    transformar ideias em realidade digital.
                </p>
            </div>
            <div className="w-full" id="bio">
                <h2 className="text-2xl font-bold underline mb-4">Bio</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">1998</b>
                        <p>Nascido Mogi Guaçu - São Paulo</p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">2022</b>
                        <a
                            href="https://drive.google.com/file/d/1vaX-bnOvtwC1VM0RiJQxs5pvSjOEMmbC/view?usp=sharing"
                            target="_blank"
                            className="hover:cursor-pointer underline decoration-white/20 hover:text-yellow-400 transition-all duration-300"
                        >
                            Cursando Análise e Desenvolvimento de Sistemas -
                            União das Américas Descomplica
                        </a>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2022 - 2023</b>
                        <p>
                            Estágiario Desenvolvedor de aplicativos web - Coding
                            Invest
                        </p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2023 - 2025</b>
                        <p>
                            Editor de vídeos - Charge Marketing para
                            Restaurantes
                        </p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">2025</b>
                        <a
                            href="https://drive.google.com/file/d/1vaX-bnOvtwC1VM0RiJQxs5pvSjOEMmbC/view?usp=sharing"
                            target="_blank"
                            className="hover:cursor-pointer underline decoration-white/20 hover:text-yellow-400 transition-all duration-300"
                        >
                            Formado em Análise e Desenvolvimento de Sistemas -
                            União das Américas Descomplica
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full transition-all">
                <h2 className="text-2xl font-bold underline mb-4">Redes</h2>
                <div className="flex flex-col gap-2 ">
                    <a
                        href="https://www.linkedin.com/in/matheus-saka/"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-blue-400 duration-300"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/tatsuosaka"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-cyan-400 duration-300"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                    <button
                        onClick={copyEmail}
                        className={`transition-all flex gap-2 items-center hover:cursor-pointer hover:text-amber-400 duration-300 `}
                    >
                        <MdMail />
                        <span id="email" className="flex items-center gap-2">
                            matheus.tats@gmail.com
                        </span>
                    </button>
                    <a
                        href="https://www.instagram.com/tatsuo.saka/"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-red-400 duration-300"
                    >
                        <FaInstagram />
                        Instagram
                    </a>
                </div>
            </div>
            <div className="w-full" id="projetos">
                <Projects />
            </div>
        </article>
    );
}
