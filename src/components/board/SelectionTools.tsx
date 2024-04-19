"use client";

import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { useMutation, useSelf } from "../../../liveblocks.config";
import { UseSelectionBounds } from "@/hooks/UseSelectionBounds";
import { useDeleteLayers } from "@/hooks/useDeleteLayers";
import ColorPicker from "./ColorPicker";
import { Button } from "../ui/button";
import Hint from "../global/Hint";
import { BringToFrontIcon, SendToBackIcon, Trash2Icon } from "lucide-react";

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

    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const array = liveLayerIds.toArray();

        for (let i = 0; i < array.length; i++) {
          if (selection.includes(array[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i);
        }
      },
      [selection]
    );

    const moveToFront = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const array = liveLayerIds.toArray();

        for (let i = 0; i < array.length; i++) {
          if (selection.includes(array[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(indices[i], liveLayerIds.length - 1);
        }
      },
      [selection]
    );

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
        <div className="flex flex-col gap-y-0.5">
          <Hint label="Bring To Front">
            <Button size={"icon"} variant={"board"} onClick={moveToFront}>
              <BringToFrontIcon />
            </Button>
          </Hint>
          <Hint label="Send To Back">
            <Button size={"icon"} variant={"board"} onClick={moveToBack}>
              <SendToBackIcon />
            </Button>
          </Hint>
        </div>
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

SelectionTools.displayName = "SelectionTools"

export default SelectionTools;
