"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import filmesData from "@/data/filmes.json";
import { Movie } from "@/types/movie";

const filmes: Movie[] = filmesData;

export default function Home() {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const filmesFiltrados = useMemo(() => {
    return filmes.filter((filme) =>
      filme.titulo.toLowerCase().includes(busca.toLowerCase())
    );
  }, [busca]);

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#050810]">


      <div className="max-w-7xl mx-auto px-6 py-10 md:px-12">
        <div className="mx-auto mb-10 max-w-md">
          <SearchBar value={busca} onChange={setBusca} />
        </div>

        <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold">
          Todos os filmes
        </h2>

        {filmesFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filmesFiltrados.map((filme, index) => (
              <motion.div
                key={filme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <MovieCard
                  movie={filme}
                  isFavorite={favoritos.includes(filme.id)}
                  onToggleFavorite={toggleFavorito}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 mt-16">
            Nenhum filme encontrado para essa busca.
          </p>
        )}
      </div>
    </main>
  );
}