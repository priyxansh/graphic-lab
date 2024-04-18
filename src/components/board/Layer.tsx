"use client";

import { memo } from "react";
import { useStorage } from "../../../liveblocks.config";
import { LayerType } from "@/types/canvas";
import Rectangle from "./Rectangle";

type LayerProps = {
  layerId: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
};

const Layer = memo(
  ({ layerId, onLayerPointerDown, selectionColor }: LayerProps) => {
    const layer = useStorage((s) => s.layers.get(layerId));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            layerId={layerId}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.log("Unknown layer type", layer.type);
        return null;
    }
  }
);

export default Layer;
