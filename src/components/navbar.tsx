import NavbarButton from "./navbarbutton";
import { MdDarkMode } from "react-icons/md";
export default function Navbar() {
    return (
        <div className="w-full sticky flex gap-4 justify-center items-center top-0 backdrop-blur-lg h-12 text-base">
            <ul className="flex gap-4">
                <li className="font-extrabold">Tatsuo Saka</li>
                <li>
                    <NavbarButton linkName="bio" link="#bio" />
                </li>
                <li>
                    <NavbarButton linkName="about" />
                </li>
                <li>
                    <NavbarButton linkName="github" />
                </li>
            </ul>
        </div>
    );
}
