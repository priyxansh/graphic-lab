"use client"

import { Info } from "./Info";
import { Toolbar } from "./Toolbar";
import { Participants } from "./Participants";
import { Loading } from "./Loading";

interface CanvasProps {
  boardId: string;

}

export const Canvas = ({
  boardId,
}: CanvasProps ) => {  

  
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId}/>
      <Participants />  
      <Toolbar />
    </main>
  );
}