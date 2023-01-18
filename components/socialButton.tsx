import Link from "next/link"
import Image from "next/image"

type SocialButtonProps = {
    pathToIcon: string,
    link: string
    invert?: boolean,
    additionalCSS?: string
}

const getAltTextFromPath = (path: string) => {
    const strings = path.split("/")
    return strings[strings.length - 1].split(".")[0]
}

const SocialButton = ({ pathToIcon, link, invert, additionalCSS }: SocialButtonProps) => {
    const altText = getAltTextFromPath(pathToIcon)

    return (
        <Link href={link}>
            <div className={`w-11 h-11 relative ${invert ? 'invert' : ''} ${additionalCSS}`}>
                <Image fill src={pathToIcon} alt={altText} />
            </div>
        </Link>
    )
}

export default SocialButton