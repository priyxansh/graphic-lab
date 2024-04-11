"use client"

import { Info } from "./Info";
import { Toolbar } from "./Toolbar";
import { Participants } from "./Participants";
import { Loading } from "./Loading";
import { useSelf } from "../../../liveblocks.config";

interface CanvasProps {
  boardId: string;

}

export const Canvas = ({
  boardId,
}: CanvasProps ) => {  

  const info = useSelf((me) => me.info )
  
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />  
      <Toolbar />
    </main>
  );
}