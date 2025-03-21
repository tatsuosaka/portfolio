import NavbarButton from "./navbarbutton";

export default function Navbar() {
    return (
        <div className="w-full sticky flex gap-4 justify-center items-center top-0 backdrop-blur-lg h-12 text-base">
            <ul className="flex gap-4">
                <li className="font-extrabold">Tatsuo Saka</li>
                <li>
                    <NavbarButton link="home" />
                </li>
                <li>
                    <NavbarButton link="works" />
                </li>
                <li>
                    <NavbarButton link="about" />
                </li>
                <li>
                    <NavbarButton link="github" />
                </li>
            </ul>
        </div>
    );
}
