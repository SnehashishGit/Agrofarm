import MainButton from "../MainButton";

function PricingBox({ img, price }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[40rem] bg-white shadow-xl relative min540:w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative "
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#4CAF50] -bottom-[18px] left-0 right-0 mx-auto">
            Product
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
            ₹
            </span>
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-thin bottom-[25px] -right-[6rem]">
              only/-
            </span>
          </p>
          {/* text */}
          <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#0a64bc] ">
          <p>Farm Machinery </p>
          <p>Market Price : <span className="line-through"> ₹ 38000 /-</span></p>
          <p>35% discount . Avail the offer now</p>

          </div>

          <MainButton
            color={`!text-white`}
            bg={`bg-[#4CAF50]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;
