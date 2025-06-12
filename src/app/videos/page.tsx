import Navbar from "@/components/navbar";
import NavbarButton from "@/components/navbarbutton";
import Video from "@/components/video";
import Link from "next/link";

export default function Videos() {
    return (
        <main className="flex items-center flex-col justify-center">
            <article className="flex flex-col gap-6 justify-between items-center lg:size-2/4 sm:size-2/3 size-10/12 mt-2">
                <div className="w-full sticky flex gap-4 justify-center items-center top-0 backdrop-blur-lg h-12 text-base">
                    <ul className="flex gap-4">
                        <li className="font-extrabold">
                            <NavbarButton linkName="Tatsuo Saka" link="/" />
                        </li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold underline mb-4">Vídeos</h2>
                <div className="grid sm:grid-cols-4 justify-items-center grid-cols-2 gap-4 mb-4">
                    <Video
                        link="https://www.instagram.com/p/DI9KxcDOf9L/"
                        videosrc="/videos/p1.mp4"
                        video="Boteco Tijuca - Promoção"
                    />
                    <Video
                        link="https://www.instagram.com/p/DCpDq13OWED/"
                        videosrc="/videos/p2.mp4"
                        video="Azumy - Nutricionista"
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
                        video="Carnívoros Mind - Lanche do mês"
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
                        video="Boteco Tijuca - Esquenta"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DKvBgLaSNPy/"
                        videosrc="/videos/p8.mp4"
                        video="Carnívoros Mind - Dia dos namorados"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DKuXDgUuGu1/"
                        videosrc="/videos/p9.mp4"
                        video="Carnívoros Mind - Lanche do mês"
                    />
                    <Video
                        link="https://www.instagram.com/reel/DIw4Ax_yObZ/"
                        videosrc="/videos/p10.mp4"
                        video="Capittão Espeto - Promoção"
                    />
                </div>
                <Link
                    href={"/"}
                    className="bg-zinc-900/40 hover:bg-zinc-900/50 p-4 rounded flex justify-center underline w-full text-center hover:text-amber-300 transition-all duration-300"
                >
                    Voltar
                </Link>
            </article>
            <p className="p-6 select-none">© Matheus Tatsuo Saka</p>
        </main>
    );
}
