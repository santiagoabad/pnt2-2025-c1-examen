import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <Link href={`/peliculas`}>
      <div className="flex w-screen h-auto px-10 py-10 justify-between">
        <img src="/movie_icon.png" alt="Logo" width={50} height={50}></img>
        <h1 className="text-white font-bold text-xl">Listado de peliculas</h1>
      </div>
    </Link>
  );
}
