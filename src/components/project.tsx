export default function Project(props: {
    image: string;
    link: string;
    project: string;
}) {
    return (
        <div className="text-center">
            <a
                href={props.link}
                target="_blank"
                style={{ backgroundImage: `url(/images/${props.image}.webp)` }}
                className={`rounded-lg bg-cover block aspect-video mb-2 hover:opacity-70 bg-center bg-amber-300 transition-all duration-200`}
            ></a>
            <a
                href={props.link}
                className="font-bold hover:text-amber-300 transition-all duration-300"
                target="_blank"
            >
                {props.project}
            </a>
        </div>
    );
}
