import { createEffect, createSignal, For, onCleanup, onMount } from "solid-js";
import { A } from "@solidjs/router";
import Lenis from "lenis";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";
import Pills from "./components/pills/pills";
import ffLogo from "./assets/ff.svg";
import ffLightLogo from "./assets/ffLight.svg";
import LenisScroll from "./components/lenisScroll/lenisScroll";
import SampleImg from "./assets/sample.jpg";
import {
  copyright,
  country,
  date,
  day,
  routeChildVector,
  time,
  year,
} from "./constants/appConstant";
import { MoveUp, Send } from "lucide-solid";
import { animate, transform } from "motion";

function App() {
  let lenis: Lenis;
  let animateImage: any;
  const [activeSection, setActiveSection] = createSignal("");

  onMount(() => {
    animate(
      animateImage,
      {
        transform: ["scaleX(0)", "scaleX(1)"],
      },
      {
        duration: 1, // Adjust to your liking
        ease: "easeInOut", // "ease-in-out" / "ease-out" / etc.
      },
    );
  });
  onMount(() => {
    // initialize Lenis once when component mounts
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // set up the animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  createEffect(() => {
    // initialize intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    // observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
  });
  onCleanup(() => {
    // clean up Lenis instance when component unmounts
    if (lenis) {
      lenis.destroy();
    }
  });

  const handleClick = (target: string) => (event: MouseEvent) => {
    event.preventDefault();
    // use the existing lenis instance to scroll
    const targetElement = document.querySelector(target);
    if (targetElement) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  const isActive = (href: string) => {
    return href.slice(1) === activeSection();
  };

  return (
    <LenisScroll>
      <Navbar style="mx-auto w-fit bottom-12 fixed z-[100] left-0 right-0 rounded-md bg-[#4D4D4D]/30 backdrop-blur-lg p-[10px]">
        <nav class="w-full flex items-center justify-between gap-2">
          <A
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis.scrollTo("top", {
                offset: 0,
                duration: 2.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            }}
            class="text-3xl h-[65px]  flex items-center justify-center bg-[#222222] font-bold rounded-md  text-white text-center p-[20px] hover:bg-[#333333] duration-300"
          >
            <img
              src={ffLightLogo}
              class="h-[50px]"
              alt="friedly_freddie_logo"
            />
          </A>
          <span class="bg-[#222222] rounded-md text-white h-[65px] flex gap-3 items-center justify-center px-3">
            <For each={routeChildVector} fallback={<div>Loading...</div>}>
              {(item) => (
                <A
                  onClick={handleClick(item?.href)}
                  href={item?.href}
                  class={`text-sm tracking-wider duration-300 hover:bg-[#333333] font-semibold uppercase border py-3 px-4  rounded-md text-center ${
                    isActive(item.href) ? "border-[#FF4E21]" : "border-gray-500"
                  }`}
                >
                  {item?.title}
                </A>
              )}
            </For>
          </span>
          <span class="bg-[#FF4E21] rounded-md text-white h-[65px] flex gap-3 items-center justify-center px-3 hover:bg-white hover:text-black duration-300">
            <Button style="text-sm text-center rounded-md  font-semibold tracking-wider uppercase flex items-center justify-center py-3 px-4    ">
              Contact us
            </Button>
          </span>
        </nav>
      </Navbar>
      <section class="my-3 w-[85%] mx-auto  flex justify-between items-center"></section>
      <section class="h-[100vh]" id="home">
        <div class="w-[90%] mx-auto">
          <div class="flex  justify-start">
            <div class="w-[50%] ">
              <img
                src={ffLogo}
                class="h-[100px] max-h-[100px]"
                alt="friedly_freddie_logo"
              />
              <div class="mb-10 mt-[300px]">
                <h1 class="text-[5rem] font-sans font-medium leading-tight">
                  Let’s <span class="text-[#FF4E21]"> Redefine</span>
                </h1>
                <h1 class="text-[5rem]  font-sans font-medium leading-tight">
                  What’s Possible
                </h1>
                <p class="text-lg mt-2 mb-5 text-gray-500 font-normal">
                  Rebuilding apps and websites that drive real results for your
                  business<span class="text-xs"> &#x2022;</span>
                </p>
              </div>
            </div>
            <div
              ref={animateImage}
              class=" origin-left flex-1 h-[95vh] rounded-md overflow-hidden "
            >
              <img
                class="w-full object-contain duration-1000"
                src={SampleImg}
                alt="friedly_freddie_logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="h-[100vh]" id="why_us">
        <h1>WHY US</h1>
      </section>
      <section class="h-[100vh]" id="services">
        <h1>SERVICES</h1>
      </section>
      <section class="h-[100vh]" id="clients">
        <h1>CLIENTS</h1>
      </section>
      <section class="subscribe" id="subscribe">
        <div class="w-[70%]  mx-auto my-20">
          <h1>
            <span class=" font-semibold text-gray-900 ">
              <Pills style="text-[14px] flex items-center justify-center uppercase w-fit font-medium border px-4 py-2 rounded-3xl bg-gradient-to-r from-[#FF4E21] to-black border-white text-white">
                <Send size={13} /> &nbsp; Connect
              </Pills>
              <p class="text-[100px] font-normal leading-tight">
                Meet our friendly <br />
                <span class="font-mrdium text-[#FF4E21]">developers</span> today
                <span class="text-3xl"> &#x2022;</span>
              </p>
            </span>
          </h1>
          <div class="flex items-center justify-start gap-5 my-5">
            <Button style="py-3 px-5 border border-black rounded-md shadow font-medium hover:px-6 duration-300 bg-black text-white hover:bg-[#015EF1] hover:border-none">
              Schedule a Zoom
            </Button>
            <Button style="py-3 px-5 border border-black rounded-md shadow font-medium  hover:px-6 duration-300 text-black hover:bg-[#23d564] hover:border-none ">
              Chat on Whatsapp
            </Button>
          </div>
        </div>
      </section>
      <section id="footer">
        <Footer style="mx-auto w-full h-[100vh] bg-[#FF4E21] relative">
          <div class="flex flex-col h-[90vh] max-h-[90vh] w-[85%] mx-auto justify-center items-center">
            <img
              src={ffLogo}
              class="w-fit h-fit max-h-[400px]"
              alt="friedly_freddie_logo"
            />
            <div class="flex items-center -mt-8 -ml-[10px] text-black">
              <p class="font-medium text-md">
                {copyright}
                {year}
              </p>
            </div>
          </div>
          <A
            href="#"
            onClick={(e) => {
              e.preventDefault();
              lenis.scrollTo("top", {
                offset: 0,
                duration: 2.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            }}
            class=" absolute bottom-12 right-12 h-[65px] w-[65px] flex items-center justify-center bg-[#222222] hover:bg-[#333333] transition-colors font-bold rounded-md text-white text-center"
          >
            <MoveUp size={24} />
          </A>
        </Footer>
      </section>
    </LenisScroll>
  );
}

export default App;
