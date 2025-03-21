import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Article() {
    return (
        <article className="flex flex-col gap-6 justify-between items-center lg:size-2/4 sm:size-2/3 size-10/12 mt-2">
            <div className="bg-zinc-900/40 p-4 rounded text-center w-full">
                <p>Olá! sou desenvolvedor front-end e editor de vídeos! 😁</p>
            </div>
            <div className="flex gap-4 justify-between items-center w-full">
                <div>
                    <h2 className="text-4xl">Matheus Tatsuo Saka</h2>
                    <p>Desenvolvedor / Editor de vídeos / Artista </p>
                </div>
                <Image
                    className="rounded-full border-2 border-white"
                    src={"/images/perfil.webp"}
                    alt="profile"
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h2 className="text-2xl font-bold underline mb-4">Sobre</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quibusdam odit nobis consectetur alias, vel
                    nostrum temporibus qui expedita sed aliquid cum facere eius,
                    repellat soluta maxime iste necessitatibus, aperiam velit
                    voluptate. Earum nihil cupiditate delectus quidem, beatae
                    amet?
                </p>
            </div>
            <div className="w-full">
                <h2 className="text-2xl font-bold underline mb-4" id="bio">
                    Bio
                </h2>
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
                        href="https://www.instagram.com/tatsuo.saka/"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-red-400 duration-300"
                    >
                        <FaInstagram />
                        Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matheus-saka/"
                        target="_blank"
                        className="flex gap-2 items-center hover:text-blue-400 duration-300"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
        </article>
    );
}
