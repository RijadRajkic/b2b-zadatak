import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface BorderStylingProps {
 radius?: CSS.Property.BorderRadius;
 bottom?: CSS.Property.BorderBottom;
 top?: CSS.Property.BorderBottom;
 left?: CSS.Property.BorderLeft;
 right?: CSS.Property.BorderRight;
 width?: CSS.Property.BorderWidth;
 color?: CSS.Property.BorderColor;
}

export const BorderStyling = (props?: BorderStylingProps | CSS.Property.Border) =>
 typeof props === "string" ? `border: ${props};` : extractCssStyle(props, "border");
