"use client";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import Projects from "./projects";
import Link from "next/link";

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
                <p>
                    Olá! Eu sou designer, editor de vídeo e desenvolvedor web!
                    🎬
                </p>
            </div>
            <div className="flex gap-4 lg:flex-row flex-col justify-between items-center w-full">
                <div className="w-full">
                    <h2 className="text-4xl hover:cursor-default transition-all">
                        <span className="hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Matheus
                        </span>{" "}
                        <span className="hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Tatsuo
                        </span>{" "}
                        <span className="hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Saka
                        </span>
                    </h2>
                    <p>
                        <span className="hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Editor de Vídeo
                        </span>{" "}
                        /{" "}
                        <span className="hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Desenvolvedor Web
                        </span>{" "}
                        /{" "}
                        <span className="hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Designer
                        </span>
                    </p>
                </div>
                <Image
                    className="w-full select-none rounded-md border-white object-cover sm:h-96 h-72 transition-all"
                    src={"/images/perfil.webp"}
                    alt="profile"
                    width={1000}
                    height={1000}
                />
            </div>
            <div id="about">
                <h2 className="text-2xl font-bold underline mb-4 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                    Sobre
                </h2>
                <p className="mb-4">
                    Olá! Eu sou o Matheus Tatsuo Saka um editor de vídeo
                    especialista em editar conteúdo para YouTube, TikTok e
                    Instagram, principalmente para criadores brasileiros,
                    utilizando o DaVinci Resolve.
                </p>
                <p className="mb-4">
                    Além da edição de vídeo, também tenho experiência com o
                    Photoshop para a criação artes visuais, também tenho
                    formação em desenvolvimento web (HTML, CSS, JavaScript,
                    React, Next.js, etc.), o que adiciona uma vantagem criativa
                    e tecnológica ao meu fluxo de trabalho.
                </p>
                <Link
                    href={
                        "https://x.com/messages/compose?recipient_id=1725995255055388672"
                    }
                    target="_blank"
                    className="underline hover:uppercase hover:font-bold hover:text-red-500 transition-all"
                >
                    Vamos dar vida a sua ideia
                </Link>
            </div>
            <div className="w-full" id="bio">
                <h2 className="text-2xl font-bold underline mb-4 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                    Bio
                </h2>
                <div className="flex flex-col gap-2">
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">1998</b>
                        <p>Nascido - São Paulo</p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">2022</b>
                        <a
                            href="https://drive.google.com/file/d/1vaX-bnOvtwC1VM0RiJQxs5pvSjOEMmbC/view?usp=sharing"
                            target="_blank"
                            className="hover:cursor-pointer underline decoration-white/20 hover:text-red-500 transition-all duration-300"
                        >
                            Estudando Análise e Desenvolvimento de Sistemas -
                            União das Américas Descomplica
                        </a>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2022 - 2023</b>
                        <p>
                            Estagiário em Desenvolvimento de Aplicações Web -
                            Coding Invest
                        </p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2023 - 2025</b>
                        <p>
                            Editor de Vídeo – Charge Marketing for Restaurants
                        </p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">2025</b>
                        <a
                            href="https://drive.google.com/file/d/1vaX-bnOvtwC1VM0RiJQxs5pvSjOEMmbC/view?usp=sharing"
                            target="_blank"
                            className="hover:cursor-pointer underline decoration-white/20 hover:text-red-500 transition-all duration-300"
                        >
                            Graduado em Análise e Desenvolvimento de Sistemas
                        </a>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2025</b>
                        <p>Analista de Mídias Sociais – Portal ON</p>
                    </div>
                </div>
            </div>

            <div className="w-full transition-all">
                <h2 className="text-2xl font-bold underline mb-4 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                    Redes Sociais
                </h2>
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
                        className="flex gap-2 items-center hover:text-cyan-400 duration-300 "
                    >
                        <FaGithub />
                        GitHub
                    </a>
                    <a
                        href="https://x.com/tatsuoedit"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-cyan-400 duration-300"
                    >
                        <FaXTwitter />
                        Twitter
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
                        href="https://www.instagram.com/tatsuoedit/"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-red-400 duration-300"
                    >
                        <FaInstagram />
                        Instagram
                    </a>
                    <a
                        href="https://www.youtube.com/@Tatsuuo/"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-red-400 duration-300"
                    >
                        <FaYoutube />
                        YouTube
                    </a>
                </div>
            </div>
            <div className="w-full" id="projects">
                <Projects />
            </div>
        </article>
    );
}
