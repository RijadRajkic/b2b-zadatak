import { Property } from "csstype";
import styled, { RuleSet } from "styled-components";

import {
 BackgroundStyling,
 BackgroundStylingProps,
 BorderStyling,
 BorderStylingProps,
 DimensionStyling,
 DimensionStylingProps,
 MarginStyling,
 MarginStylingProps,
 OverflowStyling,
 OverflowStylingProps,
 PaddingStyling,
 PaddingStylingProps,
} from "../../utilities";

export interface FlexContainerProps {
 flexDirection?: Property.FlexDirection;
 flexWrap?: Property.FlexWrap;
 justifyContent?: Property.JustifyContent;
 alignItems?: Property.AlignItems;
 alignContent?: Property.AlignContent;
 alignSelf?: Property.AlignSelf;
 gap?: Property.Gap;
 dimensions?: DimensionStylingProps;
 padding?: PaddingStylingProps | Property.Padding;
 margin?: MarginStylingProps | string;
 overflow?: OverflowStylingProps | Property.Overflow;
 border?: BorderStylingProps;
 background?: BackgroundStylingProps | Property.Background;
 position?: Property.Position;
 css?: RuleSet<object>;
}

export const FlexContainer = styled.div<FlexContainerProps>`
 display: flex;
 flex-direction: ${({ flexDirection }) => flexDirection ?? undefined};
 align-self: ${({ alignSelf }) => alignSelf ?? undefined};
 flex-wrap: ${({ flexWrap }) => flexWrap ?? undefined};
 justify-content: ${({ justifyContent }) => justifyContent ?? undefined};
 align-items: ${({ alignItems }) => alignItems ?? undefined};
 align-content: ${({ alignContent }) => alignContent ?? undefined};
 gap: ${({ gap }) => gap ?? undefined};
 position: ${({ position }) => position ?? undefined};

 box-sizing: border-box;
 ${({ dimensions }) => DimensionStyling(dimensions)};
 ${({ padding }) => PaddingStyling(padding)};

 ${({ margin }) => {
  switch (typeof margin) {
   case "object":
    return MarginStyling(margin);
   case "string":
    return `margin: ${margin}`;
   default:
    return "";
  }
 }};
 ${({ overflow }) => (overflow ? OverflowStyling(overflow) : "")};
 ${({ border }) => BorderStyling({ ...border })};
 ${({ background }) => BackgroundStyling(background)};

 ${({ css }) => css};
`;
