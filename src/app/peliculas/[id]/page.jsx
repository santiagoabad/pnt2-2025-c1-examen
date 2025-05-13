"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect, use } from "react";

export default function DetallePelicula({ params }) {
  const { id } = use(params);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://mflixbackend.azurewebsites.net/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="w-100 h-auto bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center text-black font-semibold py-5 text-center">
          <img
            src={movie.poster}
            alt={`Poster de ${movie.title}`}
            className="w-60 rounded-lg"
          />
          <p className="text-m mt-1 truncate">{movie.title}</p>
          <p className="text-xs mt-1 px-10">{movie.fullplot}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
