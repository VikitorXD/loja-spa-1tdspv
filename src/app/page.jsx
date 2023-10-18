import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return (
      <div>
        <h1>Home</h1>
        <Image src="/ceu.jpg" alt="ceu" width={320} height={320}></Image>
      </div>
  )
}
