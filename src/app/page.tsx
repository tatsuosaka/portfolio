import Article from "@/components/article";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex items-center flex-col justify-center">
            <Navbar />
            <Article />

            <p className="p-6 select-none">© Matheus Tatsuo Saka</p>
        </main>
    );
}
