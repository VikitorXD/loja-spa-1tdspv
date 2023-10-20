import Link from "next/link";


export default function Cabecalho() {
  return (
    <header className="bg-slate-800  text-white">
        <h1 className="text-center text-3x1 font-extrabold">Produtos</h1>
        <hr className="bg-red-600"/>    
      <nav>
        <ul>
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/produtos/taco">
              <button>Taco</button>
            </Link>
          </li>
          <li>
            <Link href="/produtos/tenis">
              <button>tenis</button>
            </Link>
          </li>
          <li>
            <Link href="/produtos/sobreAspas">
              <button>Sobre Aspas</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
