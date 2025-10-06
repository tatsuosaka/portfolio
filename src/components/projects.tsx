import Link from "next/link";
import Project from "./project";
import Video from "./video";
import Design from "./design";

export default function Projects() {
    return (
        <div>
            <h2 className="text-2xl font-bold underline mb-4 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                Projetos
            </h2>
            <h2 className="text-2xl font-bold mb-4 bg-zinc-900/40 w-full rounded flex justify-center p-2 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                Vídeos
            </h2>
            <div className="grid sm:grid-cols-4 justify-items-center grid-cols-2 gap-4 mb-4">
                <Video
                    link="https://www.instagram.com/p/DI9KxcDOf9L/"
                    videosrc="/videos/p18.mp4"
                    video="RR Parafusos"
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
                    video="Carnívoros Mind - Promotion"
                />
                <Video
                    link="https://www.instagram.com/p/DJW5OceOqst/"
                    videosrc="/videos/p5.mp4"
                    video="Carnívoros Mind - Burger of the Month"
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
                    video="Boteco Tijuca - Event"
                />
            </div>

            <Link
                href={"/videos"}
                className="bg-zinc-900/10 hover:bg-zinc-900/50 p-4 rounded flex justify-center underline w-full text-center hover:uppercase hover:font-bold hover:text-red-500 transition-all transition-all duration-300"
            >
                Veja Mais
            </Link>
            <h2 className="text-2xl font-bold mb-4 bg-zinc-900/40 w-full rounded flex justify-center p-2 mt-6 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                Sites
            </h2>
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
                    project="Clone YouTube"
                />
                <Project
                    image="hiragana"
                    link="https://tatsuosaka.github.io/hiragana/"
                    project="Hiragana Jogo"
                />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4 bg-zinc-900/40 w-full rounded flex justify-center p-2 mt-6 hover:uppercase hover:font-bold hover:text-red-500 transition-all">
                    Artes
                </h2>
                <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                    <Design src="1"></Design>
                    <Design src="2"></Design>
                    <Design src="3"></Design>
                    <Design src="4"></Design>
                    <Design src="5"></Design>
                    <Design src="6"></Design>
                    <Design src="7"></Design>
                    <Design src="8"></Design>
                    <Design src="9"></Design>
                    <Design src="10"></Design>
                    <Design src="11"></Design>
                    <Design src="12"></Design>
                    <Design src="13"></Design>
                    <Design src="14"></Design>
                    <Design src="15"></Design>
                    <Design src="16"></Design>
                    <Design src="17"></Design>
                    <Design src="18"></Design>
                    <Design src="19"></Design>
                    <Design src="20"></Design>
                    <Design src="21"></Design>
                    <Design src="22"></Design>
                    <Design src="23"></Design>
                    <Design src="24"></Design>
                    <Design src="25"></Design>
                    <Design src="26"></Design>
                    <Design src="27"></Design>
                    <Design src="28"></Design>
                </div>
            </div>
        </div>
    );
}
