import Link from "next/link";
import Image from "next/image";
export default function Bola() {
  return (
    <div>
      <h1>ASPAS</h1>
      <div>
        <p>Aspas Ex jogador da Loud atual jogador da liquid</p>
      </div>

      <div>
        <h1>
          <p>
            O aniversário de aspas é Jun 15, 2003, portanto ele tem 20 de idade.
          </p>
        </h1>
      </div>
      <figure>
        <Link href="https://www.youtube.com/@aspaszin" target="blank">
            <Image src="/aspazin.jpg" alt="Aspas" width={320} height={320}></Image>
        </Link>
      </figure>
    </div>
  );
}
