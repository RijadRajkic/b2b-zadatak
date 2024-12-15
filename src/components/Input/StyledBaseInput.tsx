import { RuleSet, styled } from "styled-components";
import { BorderStyling, BorderStylingProps, DimensionStyling, DimensionStylingProps } from "../../utilities";

interface StyledBaseInputProps {
 valid?: boolean;
 dimensions?: DimensionStylingProps;
 border?: BorderStylingProps;

 css?: RuleSet<object>;
}

export const StyledBaseInput = styled.input<StyledBaseInputProps>`
 padding: 4px 6px;

 color: "#353238";
 font-size: 16px;

 background: "#fff";

 border: solid 1.5px ${({ valid }) => (valid || valid === undefined ? "#C0C0C0" : "#E32636")};
 border-radius: 6px;

 outline: none;

 &:focus {
  border-color: "#397FFE";
 }

 &:invalid {
  border-color: "#E32636";
 }

 ${({ dimensions }) => DimensionStyling({ ...dimensions })};
 ${({ border }) => BorderStyling({ ...border })};

 ${({ css }) => css};

 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
 }

 input[type="number"] {
  -moz-appearance: textfield;
 }
`;

export const StyledCheckbox = styled(StyledBaseInput).attrs({ type: "checkbox" })`
 appearance: none;
 display: inline-block;
 width: 16px;
 height: 16px;
 background-color: "#fff";
 border: 1.5px solid ${({ valid }) => (valid || valid === undefined ? "#C0C0C0" : "#E32636")};
 border-radius: 50%;

 &:checked {
  background-color: "#397FFE";
  border-color: "#F4F4F4";
 }

 &:focus {
  border-color: "#397FFE";
 }
`;

export const StyledNumberInput = styled(StyledBaseInput).attrs({ type: "number" })`
 text-align: center;
 border-radius: 0;
 border: 1px solid "#397FFE";
 max-width: 85px;
 ${({ valid }) => (valid || valid === undefined ? "#C0C0C0" : "#E32636")};
 background-color: "#fff";
 color: "#353238";

 padding: unset;

 height: 32px;

 &:focus {
  outline: none;
 }

 &:invalid {
  border-color: "#E32636";
 }

 &::-webkit-outer-spin-button,
 &::-webkit-inner-spin-button {
  -webkit-appearance: none;
 }
`;
