import Link from "next/link"
import SocialButton from "./socialButton"

const Footer = () => {
    return (
        <div className="bg-dark-purple mt-auto h-12 flex items-center justify-center text-xl">
            <p className="mr-2">Created by <Link className="hover:underline" href="https://anto.au">Anthony Mai</Link></p>
            <div className="flex flex-row border-l-2 border-thistle-purple">
                <SocialButton
                    pathToIcon="/icons/web-icon.svg"
                    link="https://anto.au"
                    additionalCSS="ml-2"
                />
                <SocialButton
                    pathToIcon="/icons/linkedIn-icon.svg"
                    link="https://www.linkedin.com/in/a-nthonymai"
                    additionalCSS="ml-2"
                />
                <SocialButton
                    pathToIcon="/icons/github-icon.svg"
                    link="https://www.github.com/a-nthonymai/pay-up"
                    additionalCSS="ml-2"
                />
            </div>
        </div>
    )
}

export default Footer