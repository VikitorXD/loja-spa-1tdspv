import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return (
      <div>
        <h1>Home</h1>
        <ul>
        <li><Link href="/produtos/tenis">TÊNIS</Link></li>
        <li><Link href="/produtos/bola">BOLA</Link></li>
        <li><Link href="/produtos/taco">TACO</Link></li>
        </ul>
        <Image src="/ceu.jpg" alt="ceu" width={320} height={320}></Image>
      </div>
  )
}
