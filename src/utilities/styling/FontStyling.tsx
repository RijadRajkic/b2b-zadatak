import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface FontStylingProps {
 weight?: CSS.Property.FontWeight;
 size?: CSS.Property.FontSize;
 family?: CSS.Property.FontFamily;
}

export const FontStyling = (props?: FontStylingProps) => extractCssStyle(props, "font");
