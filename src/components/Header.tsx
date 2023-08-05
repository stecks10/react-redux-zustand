import { useAppSelector } from "../store"

export function Header() {
  const lesson = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return currentLesson
  })
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
      <span className="text-sm text-zinc-400">Modulo "Desvendando o redux"</span>
    </div>

  )
}