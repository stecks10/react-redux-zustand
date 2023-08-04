import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export function Video(): JSX.Element {
  const lesson = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return currentLesson
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        height="100%"
        width="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  );
}
