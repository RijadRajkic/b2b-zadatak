import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface BackgroundStylingProps {
 color?: CSS.Property.BackgroundColor;
}

export const BackgroundStyling = (props?: BackgroundStylingProps | CSS.Property.Background) =>
 typeof props === "string" ? `background: ${props};` : extractCssStyle(props || {}, "background");
