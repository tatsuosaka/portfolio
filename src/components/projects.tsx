import Project from "./project";

export default function Projects() {
    return (
        <div>
            <h2 className="text-2xl font-bold underline mb-4">Projetos</h2>
            <div className="grid grid-cols-2 gap-4">
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
