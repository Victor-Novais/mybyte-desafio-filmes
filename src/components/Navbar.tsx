import Link from "next/link";
import { Clapperboard } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050810]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
                <Link href="/" className="flex items-center gap-2">
                    <Clapperboard className="text-sky-400" size={24} />
                    <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                        MyByte<span className="text-sky-400">Filmes</span>
                    </span>
                </Link>
            </div>
        </header>
    );
}