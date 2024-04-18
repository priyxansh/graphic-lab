"use client";

import { memo } from "react";
import { useStorage } from "../../../liveblocks.config";
import { LayerType } from "@/types/canvas";
import Rectangle from "./Rectangle";
import { Ellipse } from "./Ellipse";
import { Text } from "./Text";
import { StickyNote } from "./StickyNote";
import { Path } from "./Path";
import { colorToCSS } from "@/lib/utils";

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
      case LayerType.Path:
        return (
          <Path
          key={layerId}
          points={layer.points}
          onPointerDown={(e) => onLayerPointerDown(e, layerId)}
          x={layer.x}
          y={layer.y}
          fill={layer.fill ? colorToCSS(layer.fill) : "#000"}
          stroke={selectionColor}
          />

        )
      case LayerType.StickyNote:
        return (
          <StickyNote
          id={layerId}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
          />
        )
      case LayerType.Text:
        return (
          <Text 
          id={layerId}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
          />
        )
      case LayerType.Ellipse:
        return (
          <Ellipse
          id={layerId}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
          />
        )
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
