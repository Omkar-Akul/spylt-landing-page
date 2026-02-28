
const NutritionSection = () => {
  return (
    <section className="nutrition-section">
      <img src="/images/slider-dip.png" alt="" className="w-full object-cover" />
      <img src="/images/big-img.png" alt="" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-center"></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;