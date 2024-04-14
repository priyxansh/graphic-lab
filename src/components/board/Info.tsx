"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Hint from "../global/Hint";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import   BoardActions  from "@/components/dashboard/BoardCard/BoardActions"
import { Id } from "../../../convex/_generated/dataModel";
import { useRenameModal } from "@/stores/useRenameModal";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return (
    <div className="text-neutral-300 px-1.5">
      |
    </div>
  )
}

export const Info = ({
  boardId,
}: InfoProps) => {

  const {onOpen} = useRenameModal()

  const data = useQuery(api.board.get, { id : boardId as Id<"boards">}  )

  if (!data) {
    return <InfoSkeleton />
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
      <Link href="/">
          <Button  variant="board" className={cn("font-semibold text-2xl text-black", font.className)}>
            GraphicLab
          </Button>
      </Link>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}> 

      <Button variant="board" className="text-basefont-normal px-2" onClick={() => onOpen(data._id,data.title)}>
        {data.title}
      </Button>
      </Hint>
      <TabSeparator />
      <BoardActions id={data._id} title={data.title} side="bottom" sideOffset={10}>
      <div>
        <Hint label="Main menu" side="bottom" sideOffset={10}>
          <Button size="icon" variant="board" >

          <Menu />
          </Button>
        </Hint>
      </div>
      </BoardActions>
    </div>
  );
}


export const  InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-96"/>
       
  );
}