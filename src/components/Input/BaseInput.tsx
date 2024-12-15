import { FocusEvent, InputHTMLAttributes, useState } from "react";
import { styled } from "styled-components";

import { StyledBaseInput } from "./StyledBaseInput";
import { ChangeHandler, RefCallBack } from "react-hook-form";

import { DimensionStyling, DimensionStylingProps } from "../../utilities";

const BaseInputWrapper = styled.div<{ flexDirection?: string; dimensions?: DimensionStylingProps }>`
 display: flex;
 flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};

 gap: 10px;

 ${({ dimensions }) => DimensionStyling(dimensions)};
`;

const BaseInputErrorMessages = styled.div`
 display: flex;
 flex-direction: column;

 gap: 5px;

 p {
  margin: 0;
  color: "#E32636";
 }
`;

const Label = styled.label`
 font-size: 16px;
 font-weight: 500;
 margin-bottom: 5px;
`;

interface Validation {
 message: string;
 function: (value: InputHTMLAttributes<HTMLInputElement>["value"]) => boolean;
}

interface BaseInputProps {
 label?: string;
 flexDirection?: string;
 dimensions?: DimensionStylingProps;
 setValue?: (value: InputHTMLAttributes<HTMLInputElement>["value"]) => void;
 value?: InputHTMLAttributes<HTMLInputElement>["value"];
 defaultValue?: InputHTMLAttributes<HTMLInputElement>["value"];

 type?: InputHTMLAttributes<HTMLInputElement>["type"];

 autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];

 onBlur?: (event?: FocusEvent<HTMLInputElement, Element>) => void | ChangeHandler;
 onFocus?: (event?: FocusEvent<HTMLInputElement, Element>) => void;

 placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];

 validation?: Validation[];

 onChange?: ChangeHandler;
 name?: InputHTMLAttributes<HTMLInputElement>["name"];
 min?: string | number;
 max?: string | number;
 maxLength?: number;
 minLength?: number;
 pattern?: string;
 required?: boolean;
 disabled?: boolean;

 ref?: RefCallBack;
}

export const BaseInput = ({
 ref,
 setValue,
 value,
 defaultValue,
 type,
 onBlur,
 onFocus,
 flexDirection,
 dimensions,
 autoComplete,
 placeholder,
 validation,
 onChange,
 name,
 min,
 max,
 maxLength,
 minLength,
 pattern,
 required,
 disabled,
 label,
}: BaseInputProps) => {
 const [messages, setMessages] = useState<string[]>();

 const changeValue = (value: InputHTMLAttributes<HTMLInputElement>["value"]) => {
  if (!setValue) return;
  const validationMessages: string[] = [];

  (validation || [])?.forEach((validator) => {
   if (!validator.function(value)) validationMessages?.push(validator?.message);
  });

  setMessages(validationMessages);
  setValue(value);
 };

 const valid = !messages || messages?.length == 0 || !validation || validation?.length == 0 ? true : false;

 return (
  <BaseInputWrapper flexDirection={flexDirection} dimensions={dimensions}>
   <StyledBaseInput
    ref={ref}
    valid={valid}
    placeholder={placeholder}
    defaultValue={defaultValue}
    autoComplete={autoComplete}
    type={type}
    value={value}
    onChange={onChange ? onChange : (event) => changeValue(event.target.value)}
    onBlur={onBlur}
    onFocus={onFocus}
    name={name}
    min={min}
    max={max}
    maxLength={maxLength}
    minLength={minLength}
    pattern={pattern}
    required={required}
    disabled={disabled}
   />
   {label && <Label>{label}</Label>}
   <BaseInputErrorMessages>
    {(messages || [])?.map((message, index) => (
     <p key={index}>{message}</p>
    ))}
   </BaseInputErrorMessages>
  </BaseInputWrapper>
 );
};

interface BaseInputWithIconProps extends BaseInputProps {
 icon: React.ReactNode;
}

const BaseInputWithIconWrapper = styled(BaseInputWrapper)`
 align-items: center;
 justify-content: flex-start;
 gap: 5px;
 padding: 0px 8px;

 border-radius: 8px;
 border: 1px solid #dcdcdc;
 background: #fff;
`;

export const BaseInputWithIcon = ({
 icon,
 ref,
 setValue,
 value,
 defaultValue,
 type,
 onBlur,
 onFocus,
 flexDirection,
 dimensions,
 autoComplete,
 placeholder,
 validation,
 onChange,
 name,
 min,
 max,
 maxLength,
 minLength,
 pattern,
 required,
 disabled,
 label,
}: BaseInputWithIconProps) => {
 const [messages, setMessages] = useState<string[]>();

 const changeValue = (value: InputHTMLAttributes<HTMLInputElement>["value"]) => {
  if (!setValue) return;
  const validationMessages: string[] = [];

  (validation || [])?.forEach((validator) => {
   if (!validator.function(value)) validationMessages?.push(validator?.message);
  });

  setMessages(validationMessages);
  setValue(value);
 };

 const valid = !messages || messages?.length == 0 || !validation || validation?.length == 0 ? true : false;

 return (
  <BaseInputWithIconWrapper flexDirection={"row"} dimensions={dimensions}>
   <div>{icon}</div>
   <StyledBaseInput
    border={{ color: "transparent", radius: "0px", width: "0px" }}
    ref={ref}
    valid={valid}
    placeholder={placeholder}
    defaultValue={defaultValue}
    autoComplete={autoComplete}
    type={type}
    value={value}
    onChange={onChange ? onChange : (event) => changeValue(event.target.value)}
    onBlur={onBlur}
    onFocus={onFocus}
    name={name}
    min={min}
    max={max}
    maxLength={maxLength}
    minLength={minLength}
    pattern={pattern}
    required={required}
    disabled={disabled}
   />
   {label && <Label>{label}</Label>}
   <BaseInputErrorMessages>
    {(messages || [])?.map((message, index) => (
     <p key={index}>{message}</p>
    ))}
   </BaseInputErrorMessages>
  </BaseInputWithIconWrapper>
 );
};
