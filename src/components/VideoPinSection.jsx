import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {



  useGSAP(() => {
    
      const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".vd-pin-section",
        start:"-15% top",
        end:"+=180%",
        scrub:1.5,
        pin:true,
        pinSpacing:false,
      },
    });
    tl.to({}, {duration:4});

    tl.fromTo(".testimonials-section",
      {yPercent:1},
      {yPercent:0, ease:"none", duration:1}
    );

      tl.fromTo(
      ".video-box",
      {clipPath:"circle(6% at 50% 50%)"},
      {clipPath:"circle(100% at 50% 50%)",
        ease:"none",
        duration:1,
      },
      0
      );
    
  
  });

  return <section className="vd-pin-section">
        <div style={{
          clipPath: 
           
            "circle(6% at 50% 50%)",
        }} className="size-full video-box">
          <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />
          <div className="abs-center md:scale-100 scale-200">
            <img src="/images/circle-text.svg" alt="" className="spin-circle" />
            <div className="play-btn">
              <img src="/images/play.svg" alt="" className="size-[3vw] ml-[.5vw]" />
            </div>
          </div>
        </div>
      </section>
  
}

export default VideoPinSection