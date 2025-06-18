import NavbarButton from "./navbarbutton";
import { MdDarkMode } from "react-icons/md";
export default function Navbar() {
    return (
        <div className="w-full sticky flex gap-4 justify-center items-center top-0 backdrop-blur-lg h-12 text-base z-50">
            <ul className="flex gap-4">
                <li className="font-extrabold">
                    <NavbarButton linkName="Tatsuo Saka" link="/" />
                </li>
                <li>
                    <NavbarButton linkName="Sobre" link="#sobre" />
                </li>
                <li>
                    <NavbarButton linkName="Bio" link="#bio" />
                </li>
                <li>
                    <NavbarButton linkName="Projetos" link="#projetos" />
                </li>
            </ul>
        </div>
    );
}
