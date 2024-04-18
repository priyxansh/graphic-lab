"use client";

import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { useMutation, useSelf } from "../../../liveblocks.config";
import { UseSelectionBounds } from "@/hooks/UseSelectionBounds";
import { useDeleteLayers } from "@/hooks/useDeleteLayers";
import ColorPicker from "./ColorPicker";
import { Button } from "../ui/button";
import Hint from "../global/Hint";
import { Trash2Icon } from "lucide-react";

type SelectionToolsProps = {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
};

const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((layerId) => {
          const layer = liveLayers.get(layerId);
          if (layer) {
            layer.set("fill", fill);
          }
        });
      },
      [selection, setLastUsedColor]
    );

    const deleteLayers = useDeleteLayers();

    const selectionBounds = UseSelectionBounds();

    if (!selectionBounds) {
      return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(calc(${x}px - 50%), calc(${y}px - 100%))`,
        }}
      >
        <ColorPicker onChange={setFill} />
        <div className="flex items-center pl-2 ml-2 border-l border-neutral-200">
          <Hint label="Delete">
            <Button
              size={"icon"}
              variant={"board"}
              onClick={() => deleteLayers()}
            >
              <Trash2Icon size={16} />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

export default SelectionTools;
