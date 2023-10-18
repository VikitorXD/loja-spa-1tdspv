import Link from "next/link"


export default function Cabecalho(){

    return(
        <ul>
        <li><Link href="/produtos/tenis">TÊNIS</Link></li>
        <li><Link href="/produtos/bola">BOLA</Link></li>
        <li><Link href="/produtos/taco">TACO</Link></li>
</ul>
    )
}
