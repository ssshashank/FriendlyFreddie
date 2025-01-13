import Lenis from "lenis";
import { onMount, onCleanup, ParentProps } from "solid-js";

export default function LenisScroll(props: ParentProps) {
  let lenis: Lenis | undefined;

  onMount(() => {
    // create an instance of Lenis
    lenis = new Lenis({
      // optional configuration — adjust as needed
      smoothWheel: true,
      anchors: true,
    });

    // start a requestAnimationFrame loop to update Lenis every frame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  onCleanup(() => {
    lenis?.destroy();
  });

  return <>{props.children}</>;
}
