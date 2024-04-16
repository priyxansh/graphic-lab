"use client";

import { RectangleLayer } from "@/types/canvas";

type RectangleProps = {
  layerId: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
};

const Rectangle = ({
  layerId,
  layer,
  onPointerDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, width, height, fill } = layer;

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, layerId)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      width={width}
      height={height}
      x={0}
      y={0}
      fill={`rgb(${fill.r}, ${fill.g}, ${fill.b})`}
      stroke={selectionColor}
    />
  );
};

export default Rectangle;
