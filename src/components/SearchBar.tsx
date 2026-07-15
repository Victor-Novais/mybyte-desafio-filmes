"use client";

import { Search, Star } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    somenteFavoritos: boolean;
    onToggleFavoritos: () => void;
}

export default function SearchBar({
    value,
    onChange,
    somenteFavoritos,
    onToggleFavoritos,
}: SearchBarProps) {
    return (
        <div className="flex items-stretch rounded-lg border border-white/10 bg-[#0b0f16] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">

            <div className="relative flex-1">
                <Search
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Buscar por título..."
                    className="h-11 w-full bg-transparent pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
            </div>


            <div className="my-2 w-px bg-white/10" />


            <button
                onClick={onToggleFavoritos}
                className={`flex items-center gap-2 px-4 text-sm font-medium transition-colors ${somenteFavoritos ? "text-amber-400" : "text-slate-500 hover:text-slate-300"
                    }`}
            >
                <Star
                    size={16}
                    className={somenteFavoritos ? "fill-amber-400" : ""}
                />
                <span className="hidden sm:inline">Favoritos</span>
            </button>
        </div>
    );
}