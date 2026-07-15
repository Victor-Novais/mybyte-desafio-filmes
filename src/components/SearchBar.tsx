import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Buscar filme pelo título..."
                className="pl-10 bg-[#11161f] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-sky-500"
            />
        </div>
    );
}