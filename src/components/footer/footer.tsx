// imports
import { Component, JSXElement } from "solid-js";

// interface props
interface FooterProps {
    style?: string;
    children?: JSXElement;
}

// footer functional component
const Footer: Component<FooterProps> = (props: FooterProps) => {
    const { style, children } = props;
    return <footer class={style}>{children} </footer>;
};

export default Footer;
