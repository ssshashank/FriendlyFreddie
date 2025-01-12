// imports
import { Component, JSXElement } from "solid-js";

// interface props
interface NavbarProps {
    style?: string;
    children?: JSXElement;
}

// navbar functional component
const Navbar: Component<NavbarProps> = (props: NavbarProps) => {
    const { style, children } = props;
    return <header class={style}>{children} </header>;
};

export default Navbar;
