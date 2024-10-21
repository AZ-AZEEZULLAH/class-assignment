import Link from "next/link"

export default function Header(){
    return (
        <header>
        <ul className="headcontainer">
            <Link href={"/"}><li>Main</li></Link>
            <Link href={"/"}><li>Gallery</li></Link>
            <Link href={"/"}><li>Projects</li></Link>
            <Link href={"/"}><li>Certification</li></Link>
            <Link href={"/"}><li>Contact</li></Link>
        </ul>
        </header>
    )
}