import { memo } from "react";
import Cursors from "./Cursors";

type CursorsPresenceProps = {};

const CursorsPresence = memo(({}: CursorsPresenceProps) => {
  return (
    <>
    {/* Todo: Draft pencil */}
      <Cursors />
    </>
  );
});

export default CursorsPresence;
