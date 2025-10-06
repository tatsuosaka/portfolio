import Navbar from "@/components/navbar";
import NavbarButton from "@/components/navbarbutton";
import Video from "@/components/video";
import Image from "next/image";
import Link from "next/link";

export default function Videos() {
    return (
        <main className="flex items-center flex-col justify-center bg-zinc-800">
            <div className="w-full sticky flex gap-4 justify-center items-center top-0 backdrop-blur-lg h-12 text-base z-40">
                <ul className="flex gap-4">
                    <li className="font-extrabold">
                        <NavbarButton linkName="Tatsuo Saka" link="/" />
                    </li>
                    <li>
                        <NavbarButton linkName="Sobre" link="/#about" />
                    </li>
                    <li>
                        <NavbarButton linkName="Bio" link="/#bio" />
                    </li>
                    <li>
                        <NavbarButton linkName="Projetos" link="/#projects" />
                    </li>
                </ul>
            </div>
            <article className="flex flex-col gap-6 justify-between items-center lg:size-2/4 sm:size-2/3 size-10/12 mt-2">
                <div className="bg-zinc-700/10 p-4">
                    <h2 className="text-2xl font-bold mb-4 bg-zinc-900/40  w-full rounded flex justify-center p-2 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                        Vídeos
                    </h2>
                    <p className="">
                        Estes são alguns dos vídeos editados em que trabalhei
                        para empresas e restaurantes. Como você pode notar, a
                        maior parte do conteúdo é focada na indústria
                        alimentícia, pois fiz trabalhos freelance para uma
                        empresa especializada em marketing para restaurantes.
                        Infelizmente, não posso exibir todos os projetos aqui,
                        já que alguns dos vídeos estão sob confidencialidade ou
                        restrições de clientes.
                    </p>
                </div>

                <div className="grid sm:grid-cols-4 justify-items-center grid-cols-2 gap-4 mb-4">
                    <Video
                        link="https://www.instagram.com/reel/C6ZjUNbya61/"
                        videosrc="/videos/p11.mp4"
                        video="JK"
                    />
                    <Video
                        link="https://www.instagram.com/reel/C-GiGiASsdN/"
                        videosrc="/videos/p12.mp4"
                        video="Charge Podcast"
                    />
                    <Video
                        link="https://www.instagram.com/reel/C-vvSljy8__/"
                        videosrc="/videos/p13.mp4"
                        video="Ki Delicia - Promoção"
                    />
                    <Video
                        link="https://www.instagram.com/reel/C7rWt9WuEDa/"
                        videosrc="/videos/p14.mp4"
                        video="Kenko Festival - Promoção"
                    />
                    <Video
                        link="https://www.instagram.com/p/DI9KxcDOf9L/"
                        videosrc="/videos/p1.mp4"
                        video="Boteco Tijuca - Promoção"
                    />
                    <Video
                        link="https://www.instagram.com/p/DCpDq13OWED/"
                        videosrc="/videos/p2.mp4"
                        video="Azumy - Nutritionist"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DCUdYIau4WD/"
                        videosrc="/videos/p3.mp4"
                        video="Azumy - Drink"
                    />
                    <Video
                        link="https://www.instagram.com/p/DJriUHNO6PW/"
                        videosrc="/videos/p4.mp4"
                        video="Carnívoros Mind - Promoção"
                    />
                    <Video
                        link="https://www.instagram.com/p/DJW5OceOqst/"
                        videosrc="/videos/p5.mp4"
                        video="Carnívoros Mind - Burger do mês"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DIM1SnjSzhd/"
                        videosrc="/videos/p6.mp4"
                        video="Carnívoros Mind - Drink"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DJrfFxmxMbU/"
                        videosrc="/videos/p7.mp4"
                        video="Izuky - Combo"
                    />
                    <Video
                        link="https://www.instagram.com/botecotijuca/"
                        videosrc="/videos/Esquenta.mp4"
                        video="Boteco Tijuca - Evento"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DKvBgLaSNPy/"
                        videosrc="/videos/p8.mp4"
                        video="Carnívoros Mind - Dia dos Namorados"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DKuXDgUuGu1/"
                        videosrc="/videos/p9.mp4"
                        video="Carnívoros Mind - Burger do mês"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DIw4Ax_yObZ/"
                        videosrc="/videos/p10.mp4"
                        video="Capittão Espeto - Promoção"
                    />
                    <Video
                        link="https://www.instagram.com/reel/C5ygj3zu8Rc/"
                        videosrc="/videos/p15.mp4"
                        video="Ivo Tattoer"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DNWOG6NxnE6/"
                        videosrc="/videos/p16.mp4"
                        video="Talita Correa Salão"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DNQevITt5gz/"
                        videosrc="/videos/p17.mp4"
                        video="Brazuka Sabor"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DNDvs2zuWOT/"
                        videosrc="/videos/p18.mp4"
                        video="RR Parafusos"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DMp3LNAu5-H/"
                        videosrc="/videos/p20.mp4"
                        video="TKN Conveniencia"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DMirPgPRHre/"
                        videosrc="/videos/p21.mp4"
                        video="Adega Forner"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DMc7pkQui6u/"
                        videosrc="/videos/p22.mp4"
                        video="Speciale"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DMc6FUFuGRU/"
                        videosrc="/videos/p23.mp4"
                        video="RR Parafusos"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DOGqrS5jnKx/"
                        videosrc="/videos/p24.mp4"
                        video="Flash Food"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DNYIn76tCu3/"
                        videosrc="/videos/p25.mp4"
                        video="Auto Posto TKN"
                    />
                </div>

                <div className="flex gap-4 items-center bg-zinc-700/10 h-fit w-fit rounded-2xl p-4 sm:flex-row flex-col">
                    <Link
                        href={"https://www.youtube.com/@Tatsuuo/"}
                        target="_blank"
                        className="flex justify-center flex-col items-center sm:w-1/4 w-full gap-2 bg-zinc-800 rounded-2xl p-4 hover:bg-zinc-700 transition-all "
                    >
                        <Image
                            src={"/images/ytprofile.webp"}
                            alt="Youtube Channel"
                            width={200}
                            height={200}
                            className="rounded-full"
                        ></Image>

                        <p className="font-bold hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                            Tatsuuo
                        </p>
                    </Link>
                    <p className="sm:w-3/4 w-full">
                        Eu tenho um <b>Canal no YouTube</b> como hobby, onde
                        crio conteúdo de jogos. Eu gravo minhas gameplay, edito
                        toda a gravação e adiciono meu estilo pessoal com
                        música, efeitos sonoros e cortes visuais para manter
                        tudo dinâmico e divertido de assistir. É um espaço
                        criativo onde eu experimento técnicas de edição e
                        storytelling, tudo apenas por amor aos jogos e à criação
                        de conteúdo.
                    </p>
                </div>
                <Link
                    href={"/"}
                    className="bg-zinc-900/40 hover:bg-zinc-900/50 p-4 rounded flex justify-center underline w-full text-center hover:uppercase hover:font-bold hover:text-red-500 transition-all transition-all duration-300"
                >
                    Voltar
                </Link>
            </article>
            <p className="p-6 select-none">© Matheus Tatsuo Saka</p>
        </main>
    );
}
