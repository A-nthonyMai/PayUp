import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <div className="bg-don-juan-purple h-16 shadow-2xl">
            <div className="w-48 h-16 mx-2 sm:ml-[25%]">
                <Link href="https://anto.au">
                    <div className="w-16 h-16 relative">
                        <Image className="rounded-full" src="/images/anthony-mai-icon.png" alt="Photo of Anthony Mai" fill />
                        <div className="ml-16 text-4xl pt-7">
                            Anto
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header