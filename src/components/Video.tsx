import ReactPlayer from "react-player";

export function Video(): JSX.Element {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        height="100%"
        width="100%"
        controls
        url="https://www.youtube.com/watch?v=ia6pOIFGznA"
      />
    </div>
  );
}
