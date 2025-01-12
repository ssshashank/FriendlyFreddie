// imports
import { Component, JSXElement } from "solid-js";

// interface props
interface ButtonProps {
    style?: string;
    children?: JSXElement;
}

// button functional component
const Button: Component<ButtonProps> = (props: ButtonProps) => {
    const { style, children } = props;
    return <button class={style}>{children}</button>;
};

export default Button;
