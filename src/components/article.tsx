"use client";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
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
                <p>Hello! I'm a video editor and web developer! 😁🎬</p>
            </div>
            <div className="flex gap-4 justify-between items-center w-full">
                <div>
                    <h2 className="text-4xl">Matheus Tatsuo Saka</h2>
                    <p>Video Editor / Web Developer</p>
                </div>
                <Image
                    className="rounded-full border-2 select-none border-white"
                    src={"/images/perfil.webp"}
                    alt="profile"
                    width={140}
                    height={140}
                />
            </div>
            <div id="about">
                <h2 className="text-2xl font-bold underline mb-4">About</h2>
                <p className="mb-4">
                    Hi! I'm Matheus Tatsuo Saka — a passionate video editor with
                    a sharp eye for detail and storytelling. I specialize in
                    editing content for YouTube, TikTok, and Instagram, mainly
                    for Brazilian creators, and my go-to tool is DaVinci
                    Resolve. Whether it's fast-paced cuts, smooth transitions,
                    or clean color grading, I focus on delivering high-quality
                    edits that truly connect with the audience.
                </p>
                <p className="mb-4">
                    Alongside video editing, I bring strong experience with
                    Photoshop for thumbnail and visual design, helping creators
                    boost engagement and stand out. I also have a background in
                    web development (HTML, CSS, JavaScript, React, etc.), which
                    adds a creative tech-savvy edge to my workflow.
                </p>
                <Link
                    href={
                        "https://x.com/messages/compose?recipient_id=1725995255055388672"
                    }
                    target="_blank"
                    className="underline hover:text-yellow-400"
                >
                    Let’s bring your content to life
                </Link>
            </div>
            <div className="w-full" id="bio">
                <h2 className="text-2xl font-bold underline mb-4">Bio</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">1998</b>
                        <p>Born - São Paulo</p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">2022</b>
                        <a
                            href="https://drive.google.com/file/d/1vaX-bnOvtwC1VM0RiJQxs5pvSjOEMmbC/view?usp=sharing"
                            target="_blank"
                            className="hover:cursor-pointer underline decoration-white/20 hover:text-yellow-400 transition-all duration-300"
                        >
                            Studying Systems Analysis and Development - União
                            das Américas Descomplica
                        </a>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2022 - 2023</b>
                        <p>
                            Web Application Development Intern - Coding Invest
                        </p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="text-nowrap mr-8">2023 - 2025</b>
                        <p>Video Editor – Charge Marketing for Restaurants</p>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-2 justify-between bg-zinc-900/40 rounded p-2">
                        <b className="mr-24">2025</b>
                        <a
                            href="https://drive.google.com/file/d/1vaX-bnOvtwC1VM0RiJQxs5pvSjOEMmbC/view?usp=sharing"
                            target="_blank"
                            className="hover:cursor-pointer underline decoration-white/20 hover:text-yellow-400 transition-all duration-300"
                        >
                            Graduated in Systems Analysis and Development
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full transition-all">
                <h2 className="text-2xl font-bold underline mb-4">
                    Social Media
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
                        className="flex gap-2 items-center hover:text-cyan-400 duration-300"
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
                </div>
            </div>
            <div className="w-full" id="projects">
                <Projects />
            </div>
        </article>
    );
}
