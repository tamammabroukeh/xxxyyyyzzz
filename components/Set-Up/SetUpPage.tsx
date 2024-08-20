import "./styles.css";
import "../Pricing/styles.css";
import SetUpCards from "./SetUpCards";
const SetUpPage = () => {
  return (
    <div className="flex md:w-[85%] lg:w-full lg:m-0 md:mx-auto px-3 flex-col gap-7 justify-center">
      <div className="flex items-center flex-col text-black-200">
        <h2 className="leading-[3.6rem] font-[500] text-6xl">Welcome!</h2>
        <p className="text-md md:text-lg font-[400] leading-[1.8rem]">
          Select Your Setup Type.
        </p>
      </div>
      <div className="flex justify-evenly flex-col gap-20 md:gap-32 lg:gap-0 lg:flex-row">
        <SetUpCards />
      </div>
    </div>
  );
};

export default SetUpPage;
