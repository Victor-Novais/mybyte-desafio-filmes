"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";

interface MovieCardProps {
    movie: Movie;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
}

export default function MovieCard({
    movie,
    isFavorite,
    onToggleFavorite,
}: MovieCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-xl bg-[#11161f] border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/40 ${isFavorite ? "border-amber-400/60" : "border-white/5"
                }`}
        >

            <div className="relative aspect-[2/3] w-full overflow-hidden">
                <Image
                    src={movie.imagem}
                    alt={movie.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/20 to-transparent" />


                <Badge className="absolute top-3 left-3 bg-sky-500/90 hover:bg-sky-500 text-white border-0">
                    {movie.genero}
                </Badge>


                <button
                    onClick={() => onToggleFavorite(movie.id)}
                    className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-sm p-2 transition-transform hover:scale-110"
                    aria-label="Favoritar filme"
                >
                    <Heart
                        size={18}
                        className={
                            isFavorite
                                ? "fill-amber-400 text-amber-400"
                                : "text-white"
                        }
                    />
                </button>


                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg leading-tight text-white line-clamp-1">
                        {movie.titulo}
                    </h3>
                    <p className="text-sm text-slate-300">{movie.ano}</p>
                </div>
            </div>


            <div className="p-4 pt-3">
                <Link href={`/filme/${movie.id}`}>
                    <button className="group/btn relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2.5 font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:from-sky-500 hover:to-blue-500 hover:shadow-[0_8px_20px_-6px_rgba(14,165,233,0.5)] active:scale-[0.98]">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Saiba mais
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover/btn:translate-x-1"
                            />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}