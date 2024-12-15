import type CSS from "csstype";
import { css, styled } from "styled-components";

import { FontStyling, FontStylingProps } from "../../utilities";

interface TextProps extends FontStylingProps {
 color?: CSS.Property.Color;
 align?: CSS.Property.TextAlign;
 cursor?: CSS.Property.Cursor;
 wordBreak?: CSS.Property.WordBreak;
 whiteSpace?: CSS.Property.WhiteSpace;
}

const styling = css<TextProps>`
 margin: 0;
 color: ${({ color }) => color || "#353238"};
 text-align: ${({ align }) => align};
 ${({ weight, size, family }) => FontStyling({ weight, size, family })};
 cursor: ${({ cursor }) => cursor};
 word-break: ${({ wordBreak }) => wordBreak};
 white-space: ${({ whiteSpace }) => whiteSpace || "nowrap"};
`;

export const Paragraph = styled.p<TextProps>`
 ${styling}
`;
export const TitleXXL = styled.h2<TextProps>`
 ${styling}
`;
export const TitleXL = styled.h3<TextProps>`
 ${styling}
`;
export const Title = styled.h4<TextProps>`
 ${styling}
`;
export const TitleXS = styled.h5<TextProps>`
 ${styling}
`;
export const TitleXXS = styled.h5<TextProps>`
 ${styling}
`;
export const Text = styled.span<TextProps>`
 ${styling}
`;
