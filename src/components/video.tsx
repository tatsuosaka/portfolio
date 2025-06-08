export default function Video(props: {
    link: string;
    video: string;
    videosrc: string;
}) {
    return (
        <div className="text-center">
            <video
                width={280}
                height={320}
                controls
                disablePictureInPicture
                controlsList=" nodownload noremoteplayback noplaybackrate"
                className="rounded-md mb-2"
            >
                <source src={props.videosrc} />
            </video>
            <a
                className="font-bold hover:text-amber-300 transition-all duration-300"
                target="_blank"
                href={props.link}
            >
                {props.video}
            </a>
        </div>
    );
}
