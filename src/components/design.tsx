import Image from "next/image";

export default function Design(props: { src: string }) {
    return (
        <div>
            <Image
                className="rounded-md"
                src={`/images/design/${props.src}.webp`}
                alt={`Design ${props.src}`}
                width={1080}
                height={1920}
            ></Image>
        </div>
    );
}
