import type CSS from "csstype";

import { extractCssStyle } from "./extractCssStyle";

export interface DimensionStylingProps {
 width?: CSS.Property.Width;
 height?: CSS.Property.Height;

 maxWidth?: CSS.Property.MaxWidth;
 maxHeight?: CSS.Property.MaxHeight;

 minWidth?: CSS.Property.MinWidth;
 minHeight?: CSS.Property.MinHeight;

 flex?: CSS.Property.Flex;
}

export const DimensionStyling = (props?: DimensionStylingProps) => extractCssStyle(props || {});
