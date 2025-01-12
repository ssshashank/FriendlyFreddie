// imports
import { Component, JSXElement } from "solid-js";

// interface props
interface PillsProps {
  style?: string;
  children?: JSXElement;
}

// pills functional component
const Pills: Component<PillsProps> = (props: PillsProps) => {
  const { style, children } = props;
  return <div class={style}>{children} </div>;
};

export default Pills;
