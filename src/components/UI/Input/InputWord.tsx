import React, { forwardRef } from "react";
import { StyleInput, ErrorMassage } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  errorText?: string;
  isError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, errorText, isError, ...props }, ref) => (
    <div>
      <StyleInput
        type={type}
        placeholder={placeholder}
        ref={ref}
        $isError={isError}
        {...props}
      />
      {isError && <ErrorMassage>{errorText}</ErrorMassage>}
    </div>
  )
);

Input.displayName = "Input";
