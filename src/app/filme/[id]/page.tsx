import { notFound } from "next/navigation";
import filmesData from "@/data/filmes.json";
import { Movie } from "@/types/movie";
import FilmeDetalhe from "@/components/FilmeDetalhe";

const filmes: Movie[] = filmesData;

interface FilmePageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: FilmePageProps) {
    const { id } = await params;
    const filme = filmes.find((f) => f.id === Number(id));

    return {
        title: filme ? `${filme.titulo} — Mini Catálogo` : "Filme não encontrado",
    };
}

export default async function FilmePage({ params }: FilmePageProps) {
    const { id } = await params;
    const filme = filmes.find((f) => f.id === Number(id));

    if (!filme) {
        notFound();
    }

    const relacionados = filmes
        .filter((f) => f.genero === filme.genero && f.id !== filme.id)
        .slice(0, 4);

    return <FilmeDetalhe movie={filme} relacionados={relacionados} />;
}