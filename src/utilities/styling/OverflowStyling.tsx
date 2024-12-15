import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface OverflowStylingProps {
 x?: CSS.Property.OverflowX;
 y?: CSS.Property.OverflowY;
}

export const OverflowStyling = (props: OverflowStylingProps | CSS.Property.Overflow) =>
 typeof props === "object" ? extractCssStyle(props, "overflow") : `overflow: ${props}`;
