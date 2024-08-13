import { imgsFormScratch, imgsPreBuilt } from "./setup-icons";
import "./styles.css";
import "../Pricing/styles.css";
import SetUpCard from "./SetUpCard";
const SetUpPage = () => {
  return (
    <div className="flex flex-col gap-7 justify-center">
      <div className="flex items-center flex-col text-black-200">
        <h2 className="leading-[3.6rem] font-[500] text-6xl">Welcome!</h2>
        <p className="text-lg font-[400] leading-[1.8rem]">
          Select Your Setup Type.
        </p>
      </div>
      <div className="flex justify-evenly">
        {/* left card */}
        <SetUpCard
          Imgs={imgsPreBuilt}
          description="Start With a ready made website base."
          href="/setup/type"
          left={30}
          marginBottom={10}
          title="Pre built website"
        />
        {/* right card */}
        <SetUpCard
          Imgs={imgsFormScratch}
          description="Choose Header, Footer, Colors and Typography."
          href="/"
          left={18}
          marginBottom={2}
          title="Site Form Scratch"
          zIndex={10}
        />
      </div>
    </div>
  );
};

export default SetUpPage;
