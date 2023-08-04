import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ title, amountOfLessons, moduleIndex }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xl">{moduleIndex + 1}</div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons}</span>
        </div>
        <ChevronDown className="w-4 h-4 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">

        <Lesson title="fundamentos do redux" duration="12:00" />
        <Lesson title="fundamentos do redux" duration="12:00 " />
        <Lesson title="fundamentos do redux" duration="12:00 " />
      </nav>
    </div>
  )
}