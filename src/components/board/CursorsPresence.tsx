import { memo } from "react";
import Cursors from "./Cursors";
import { useOthersMapped } from "../../../liveblocks.config";
import { shallow } from "@liveblocks/client";
import { Path } from "./Path";
import { colorToCSS } from "@/lib/utils";

type CursorsPresenceProps = {};

const Drafts = () => {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      penColor: other.presence.pencilColor,
    }),
    shallow
  );

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              key={key}
              x={0}
              y={0}
              points={other.pencilDraft}
              fill={other.penColor ? colorToCSS(other.penColor) : "#000"}
            />
          );
        }

        return null;
      })}
    </>
  );
};

const CursorsPresence = memo(({}: CursorsPresenceProps) => {
  return (
    <>
      <Drafts />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorPresence"
export default CursorsPresence;
