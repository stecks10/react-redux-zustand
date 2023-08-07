import { Loader } from "lucide-react";
import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  if (isCourseLoading) {
    return <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
  }
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
    </div>
  );
}