export default function NavbarButton(props: {
    linkName: string;
    link?: string;
}) {
    return (
        <a
            className="font-bold hover:uppercase hover:font-bold hover:text-red-500 transition-all transition-all"
            href={props.link}
        >
            {props.linkName}
        </a>
    );
}
