// imports
import { Component, JSXElement } from "solid-js";

// interface props
interface NavbarProps {
    id?: string;
    style?: string;
    children?: JSXElement;
}

// navbar functional component
const Navbar: Component<NavbarProps> = (props: NavbarProps) => {
    const { style, children, id } = props;
    return <header class={style} id={id}>{children} </header>;
};

export default Navbar;
