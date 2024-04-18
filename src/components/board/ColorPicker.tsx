"use client";

import { colorToCSS } from "@/lib/utils";
import { Color } from "@/types/canvas";

type ColorPickerProps = {
  onChange: (color: Color) => void;
};

const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton onClick={onChange} color={{ r: 255, g: 0, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 165, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 128, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 0, b: 255 }} />
      <ColorButton onClick={onChange} color={{ r: 75, g: 0, b: 130 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 255, b: 255 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 0, b: 0 }} />
    </div>
  );
};

type ColorButtonProps = {
  color: Color;
  onClick: (color: Color) => void;
};

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: colorToCSS(color),
        }}
      ></div>
    </button>
  );
};

export default ColorPicker;
