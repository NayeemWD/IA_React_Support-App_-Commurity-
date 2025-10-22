const WorkHard = () => {
  return (
    <div className="container mx-auto px-6 mt-36">
      {/* Two-column layout container */}
      <div className="flex flex-row-reverse items-center justify-between ">
        {/* Left column - Feature illustration */}
        <div className="w-1/2">
          <img
            className=""
            src="../../public/Images/WorkHard/img.png"
            alt="features illustration"
          />
        </div>

        {/* Right column - Feature content */}
        <div className=" w-1/2 space-y-8">
          {/* Main heading with emoji */}
          <h1 className="text-5xl w-11/12 font-bold  items-center leading-16">
            Built in one app to make instant reply with in lowest minutes
            <img
              className=" inline-block ml-4 "
              src="../../public/Images/WorkHard/emoji.png"
              alt="emoji"
            />
          </h1>

          {/* Description text */}
          <p className="text-gray-600 w-9/12 text-lg leading-9">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <div>
            <ul class="grid grid-cols-2 gap-y-2 gap-x-8">
              <li class="flex items-center gap-2">
                <span ><img src="../../public/Images/WorkHard/Combined shape 16072.png" alt="" /></span>
                <span>Medical and vision</span>
              </li>
              <li class="flex items-center gap-2">
                <span ><img src="../../public/Images/WorkHard/Combined shape 16072.png" alt="" /></span>
                <span>HSAs and FSAs</span>
              </li>
              <li class="flex items-center gap-2">
                <span ><img src="../../public/Images/WorkHard/Combined shape 16072.png" alt="" /></span>
                <span>Life insurance</span>
              </li>
              <li class="flex items-center gap-2">
                <span ><img src="../../public/Images/WorkHard/Combined shape 16072.png" alt="" /></span>
                <span>Commuter benefits</span>
              </li>
              <li class="flex items-center gap-2">
                <span ><img src="../../public/Images/WorkHard/Combined shape 16072.png" alt="" /></span>
                <span>401(k) savings</span>
              </li>
              <li class="flex items-center gap-2">
                <span ><img src="../../public/Images/WorkHard/Combined shape 16072.png" alt="" /></span>
                <span>529 college savings</span>
              </li>
            </ul>
          </div>
          <button className="items-center text-[#3183FF]">
            Explore more{" "}
            <img
              className="inline-block ml-2 "
              src="../../public/Images/WorkHard/Group.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkHard;
