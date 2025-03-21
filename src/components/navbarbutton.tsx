export default function NavbarButton(props: { link: string }) {
    return (
        <a className="font-bold" href="">
            {props.link}
        </a>
    );
}
