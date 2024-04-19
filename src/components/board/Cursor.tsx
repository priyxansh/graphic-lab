"use client";

import { memo } from "react";
import { useOther } from "../../../liveblocks.config";
import { MousePointer2 } from "lucide-react";
import { ConnectionIdToColor } from "@/lib/utils";

type CursorProps = {
  connectionId: number;
};

const Cursor = memo(({ connectionId }: CursorProps) => {
  const {
    info: userInfo,
    presence: { cursor },
  } = useOther(connectionId, (user) => user);

  const name = userInfo?.name || "Anonymous";

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      height={50}
      width={name.length * 10 + 24}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: ConnectionIdToColor(connectionId),
          color: ConnectionIdToColor(connectionId),
        }}
      />
      <div
        className="absolute left-5 text-white px-1.5 py-0.5 rounded-md text-xs"
        style={{
          backgroundColor: ConnectionIdToColor(connectionId),
        }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";

export default Cursor;
