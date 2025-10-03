import { useEffect, useRef } from "react";
import lottie from "lottie-web"; // Single import
import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from "../root.link";
import animationData from "./astronaout.json";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    // Set speed on the specific animation instance
    anim.setSpeed(0.5);

    // Cleanup function
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <section className="mt-2 px-5 md:mt-8 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello. I'm {FRONT_PAGE_NAME}
        </h1>
        <p className="tracking-wide leading-relaxed">{FRONT_PAGE_DESC} </p>
      </div>
    </section>
  );
};

export default Hero;
