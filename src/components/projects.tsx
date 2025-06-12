import Link from "next/link";
import Project from "./project";
import Video from "./video";

export default function Projects() {
    return (
        <div>
            <h2 className="text-2xl font-bold underline mb-4">Projetos</h2>
            <h4 className="text-xl font-bold  mb-4">Vídeos</h4>
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
            </div>

            <Link
                href={"/videos"}
                className="bg-zinc-900/40 hover:bg-zinc-900/50 p-4 rounded flex justify-center underline w-full text-center hover:text-amber-300 transition-all duration-300"
            >
                Veja Mais
            </Link>
            <h4 className="text-xl font-bold  mb-4 mt-4">Sites</h4>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
                <Project
                    image="acharge"
                    link="https://www.chargemkt.com/"
                    project="A Charge Digital"
                />
                <Project
                    image="carnivoros-mind"
                    link="https://carnivorosmind.com.br/"
                    project="Carnívoros Mind"
                />
                <Project
                    image="codinginvest-blog"
                    link="https://blog.codinginvest.com.br/"
                    project="Coding Invest Blog"
                />
                <Project
                    image="codinginvest-institucional"
                    link="https://www.codinginvest.com.br/"
                    project="Coding Invest Institucional"
                />
                <Project
                    image="youtube-clone"
                    link="https://youtube-clone-beta-orpin.vercel.app/"
                    project="Youtube Clone"
                />
                <Project
                    image="hiragana"
                    link="https://tatsuosaka.github.io/hiragana/"
                    project="Jogo Hiragana"
                />
            </div>
        </div>
    );
}
