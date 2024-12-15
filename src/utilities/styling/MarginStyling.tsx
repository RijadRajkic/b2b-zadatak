import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface MarginStylingProps {
 bottom?: CSS.Property.MarginBottom;
 top?: CSS.Property.MarginTop;
 left?: CSS.Property.MarginLeft;
 right?: CSS.Property.MarginRight;
}

export const MarginStyling = (props?: MarginStylingProps | CSS.Property.Margin) =>
 typeof props === "string" ? `margin: ${props};` : extractCssStyle(props, "margin");
