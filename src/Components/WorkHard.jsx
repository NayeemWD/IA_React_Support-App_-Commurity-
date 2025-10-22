import featureImg from "../../public/Images/WorkHard/img.png";
import emojiIcon from "../../public/Images/WorkHard/emoji.png";
import checkIcon from "../../public/Images/WorkHard/Combined Shape 16072.png";
import groupIcon from "../../public/Images/WorkHard/Group.png";

const WorkHard = () => {
  return (
    <div className="container mx-auto px-6 mt-36 mb-30">
      {/* Two-column layout container */}
      <div className="flex flex-row-reverse items-center justify-between ">
        {/* Left column - Feature illustration */}
        <div className="w-1/2">
          <img className="" src={featureImg} alt="features illustration" />
        </div>

        {/* Right column - Feature content */}
        <div className=" w-1/2 space-y-8">
          {/* Main heading with emoji */}
          <h1 className="text-5xl w-11/12 font-bold  items-center leading-16">
            Built in one app to make instant reply with in lowest minutes
            <img className=" inline-block ml-4 " src={emojiIcon} alt="emoji" />
          </h1>

          {/* Description text */}
          <p className="text-gray-600 w-9/12 text-lg leading-9">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <div>
            <ul class="grid grid-cols-2 gap-y-2 gap-x-8">
              {[...Array(6)].map((_, index) => (
                <li key={index} class="flex items-center gap-2">
                  <span>
                    <img src={checkIcon} alt="check icon" />
                  </span>
                  <span>Medical and vision</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="items-center text-[#3183FF]">
            Explore more{" "}
            <img className="inline-block ml-2 " src={groupIcon} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkHard;
