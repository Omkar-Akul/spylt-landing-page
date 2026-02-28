import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const FlavourSlider = () => {
  const sliderRef = useRef(null);


  useGSAP(() => {

      const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavour-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavour-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );

    const mm = gsap.matchMedia();

    // ✅ ONLY LAPTOP / DESKTOP
    mm.add("(min-width: 1024px)", () => {
      const scrollAmount =
        sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavour-section",
          start: "top top",
          end: `+=${scrollAmount + 1500}`,
          scrub: true,
          pin: true,
         
        },
      });

      tl.to(".flavour-section", {
        x: -(scrollAmount + 1100),
        ease: "power1.inOut",
      });
    });

    // cleanup
    return () =>{ mm.kill(); };
  }, []);


  return (
    <div ref={sliderRef} className="slider-wrapper ">
      <div className="flavors">
        {
          flavorlists.map((flavor) => (
             <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
              <img src={`/images/${flavor.color}-bg.svg`} alt="" className="absolute bottom-0" />
              <img src={`/images/${flavor.color}-drink.webp`} alt="" className="drinks" />
              <img src={`/images/${flavor.color}-elements.webp`} alt="" className="elements" />
              <h1>{flavor.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FlavourSlider;