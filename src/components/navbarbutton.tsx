export default function NavbarButton(props: {
    linkName: string;
    link?: string;
}) {
    return (
        <a className="font-bold" href={props.link}>
            {props.linkName}
        </a>
    );
}
