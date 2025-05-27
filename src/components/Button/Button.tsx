import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
Button.displayName = "Button";