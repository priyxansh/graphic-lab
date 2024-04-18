import { Kalam } from "next/font/google";
import ContentEditable,{ContentEditableEvent} from "react-contenteditable";

import { cn,colorToCSS, getContrastingTextColor } from "@/lib/utils";
import { StickyNoteLayer} from "@/types/canvas";
import { useMutation  } from "../../../liveblocks.config";

const font = Kalam({
    subsets: ['latin'],
    weight: ["400"],
})

const calculateFontSize = (width: number, height: number) => {
    const maxFontSize = 96;
    const scaleFactor = 0.15;
    const fontSizeBasedOnWidth = width * scaleFactor;
    const fontSizeBasedOnHeight = height * scaleFactor;
    return Math.min(maxFontSize, fontSizeBasedOnWidth, fontSizeBasedOnHeight);
}

interface StickyNoteProps {
    id: string;
    layer: StickyNoteLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const StickyNote = ({
    layer,
    onPointerDown,
    id,
    selectionColor,
}: StickyNoteProps) => {
    const {x,y,width,height,fill,value} = layer;
    const updateValue = useMutation((
        {storage},
        newValue: string
    ) => {
        const liveLayers = storage.get("layers");

        liveLayers.get(id)?.set("value", newValue);
    },[])

    const handleContentChange = (e: ContentEditableEvent) => {
        updateValue(e.target.value);
    }
    return (
        <foreignObject
        x={x}
        y={y}
        width={width}
        height={height}
        onPointerDown={(e) => onPointerDown(e, id)}
        style={{
            outline: selectionColor ? `1px solid ${selectionColor}` : "none",
            backgroundColor: fill ? colorToCSS(fill) : "#000",
        }}
        className="shadow-md drop-shadow-xl"
        >
            <ContentEditable 
            html={value || "Text"}
            onChange={handleContentChange}
            className={cn("h-full w-full flex items-center justify-center text-center  outline-none", font.className)}
            style={{
                fontSize: calculateFontSize(width, height),
                color: fill ? getContrastingTextColor(fill) : "#000",
            }}
            />
        </foreignObject>
    )
}