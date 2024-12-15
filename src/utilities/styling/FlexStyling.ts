import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface FlexStylingProps {
 flexFlow?: CSS.Property.FlexFlow;
 flexDirection?: CSS.Property.FlexDirection;
 justifyContent?: CSS.Property.JustifyContent;
 alignItems?: CSS.Property.AlignItems;
 gap?: CSS.Property.Gap;
}

export const FlexStyling = (props: FlexStylingProps) => extractCssStyle({ display: "flex", ...props });
