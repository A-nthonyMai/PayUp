import Link from "next/link"
import SocialButton from "./socialButton"

const Footer = () => {
    return (
        <div className="bg-thunder-purple mt-auto h-12 flex items-center justify-center text-xl">
            <p>Created by <Link className="hover:underline" href="https://anto.au">Anthony Mai</Link></p>
            <div className="flex flex-row">
                <SocialButton
                    pathToIcon="/icons/linkedIn-icon.svg"
                    link="https://www.linkedin.com/in/a-nthonymai"
                    invert={true}
                    additionalCSS="ml-2"
                />
                <SocialButton
                    pathToIcon="/icons/gitHub-icon.svg"
                    link="https://www.github.com/a-nthonymai/pay-up"
                    additionalCSS="ml-2"
                />
                <SocialButton
                    pathToIcon="/icons/email-icon.svg"
                    link="mailto:hello@anto.au"
                    invert={true}
                    additionalCSS="ml-2"
                />
            </div>
        </div>
    )
}

export default Footer