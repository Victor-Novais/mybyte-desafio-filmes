import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function FilmeNaoEncontrado() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#050810] px-6 text-center">
            <FileQuestion size={48} className="mb-4 text-slate-600" />
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Filme não encontrado
            </h1>
            <p className="mt-2 max-w-sm text-slate-400">
                O filme que você está procurando não existe ou foi removido do catálogo.
            </p>
            <Link
                href="/"
                className="mt-6 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:from-sky-500 hover:to-blue-500"
            >
                Voltar para o catálogo
            </Link>
        </main>
    );
}