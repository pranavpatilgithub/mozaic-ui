import React from "react";
import Styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cn(Styles.button, Styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
Button.displayName = "Button";