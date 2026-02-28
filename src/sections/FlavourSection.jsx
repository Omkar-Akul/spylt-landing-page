import FlavourTitle from "../components/FlavourTitle";

const FlavourSection = () => {
  return <section className="flavour-section h-dvh">
         <div className="h-full flex Lg:flex-row flex-col items-center relative">
          
          <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
            <FlavourTitle />
          </div>
          <div className="h-full"></div>
         </div>
         </section>
  
}

export default FlavourSection;