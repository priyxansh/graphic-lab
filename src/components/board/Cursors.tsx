"use client";

import { useOthersConnectionIds } from "../../../liveblocks.config";
import Cursor from "./Cursor";

type CursorsProps = {};

const Cursors = ({}: CursorsProps) => {
  const othersConnectionIds = useOthersConnectionIds();

  return othersConnectionIds.map((connectionId) => (
    <Cursor key={connectionId} connectionId={connectionId} />
  ));
};

export default Cursors;
