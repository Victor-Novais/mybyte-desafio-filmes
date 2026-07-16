"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Movie } from "@/types/movie";

interface Props {
    movie: Movie;
    relacionados: Movie[];
}

export default function FilmeDetalhe({ movie, relacionados }: Props) {
    return (
        <main className="min-h-screen overflow-hidden bg-[#050810]">

            <section className="relative h-[62vh] min-h-[480px] w-full md:h-[72vh]">
                <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={movie.imagem}
                        alt=""
                        fill
                        priority
                        className="object-cover object-[center_20%] blur-2xl brightness-[0.55]"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 via-transparent to-[#050810]/40" />

                <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10 md:px-12 md:pb-14">
                    <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative mx-auto aspect-[2/3] w-40 shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] md:mx-0 md:w-52"
                        >
                            <Image src={movie.imagem} alt={movie.titulo} fill className="object-cover" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="flex-1"
                        >
                            <Badge className="mb-3 w-fit border-0 bg-sky-500 text-white">
                                {movie.genero}
                            </Badge>
                            <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.05] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:text-6xl">
                                {movie.titulo}
                            </h1>
                            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-300">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={15} className="text-sky-400" />
                                    {movie.ano}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Film size={15} className="text-sky-400" />
                                    {movie.genero}
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    <ArrowLeft size={16} />
                                    Voltar ao catálogo
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_260px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-sky-400">
                            Sinopse
                        </h2>
                        <p className="max-w-2xl text-[15px] leading-[1.85] text-slate-300">
                            {movie.sinopse}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-fit space-y-4 rounded-xl border border-white/10 bg-[#0b0f16] p-5"
                    >
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                            Ficha técnica
                        </h3>
                        <dl className="space-y-3 text-sm">
                            <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
                                <dt className="text-slate-500">Título</dt>
                                <dd className="text-right font-medium text-white">{movie.titulo}</dd>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <dt className="text-slate-500">Ano</dt>
                                <dd className="font-medium text-white">{movie.ano}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-slate-500">Gênero</dt>
                                <dd className="font-medium text-white">{movie.genero}</dd>
                            </div>
                        </dl>
                    </motion.div>
                </div>


                {relacionados.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-16"
                    >
                        <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                            Mais de {movie.genero}
                        </h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                            {relacionados.map((r, i) => (
                                <motion.div
                                    key={r.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <Link href={`/filme/${r.id}`} className="group block">
                                        <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-white/10">
                                            <Image
                                                src={r.imagem}
                                                alt={r.titulo}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <p className="mt-2 truncate text-sm font-medium text-slate-300 group-hover:text-white">
                                            {r.titulo}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </section>
        </main>
    );
}