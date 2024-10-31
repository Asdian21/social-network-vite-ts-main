import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  errorText?: string;
  isError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, errorText, isError, ...props }, ref) => (
    <div>
      <input type={type} placeholder={placeholder} ref={ref} {...props} />
      {isError && <span>{errorText}</span>}
    </div>
  )
);

Input.displayName = "Input";
