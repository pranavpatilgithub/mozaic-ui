import { jsx as _jsx } from "react/jsx-runtime";
import Styles from "./Button.module.css";
import { cn } from "../../utils/cn";
export const Button = ({ variant = "primary", className, children, ...rest }) => {
    return (_jsx("button", { className: cn(Styles.button, Styles[variant], className), ...rest, children: children }));
};
Button.displayName = "Button";
