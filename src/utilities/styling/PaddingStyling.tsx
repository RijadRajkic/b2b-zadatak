import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface PaddingStylingProps {
 bottom?: CSS.Property.PaddingBottom;
 top?: CSS.Property.PaddingTop;
 left?: CSS.Property.PaddingLeft;
 right?: CSS.Property.PaddingRight;
}

export const PaddingStyling = (props?: PaddingStylingProps | CSS.Property.Padding) =>
 typeof props === "string" ? `padding: ${props};` : extractCssStyle(props, "padding");
