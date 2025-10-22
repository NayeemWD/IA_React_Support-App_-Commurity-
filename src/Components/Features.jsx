const Features = () => {
  return (
    <div className="container mx-auto px-6 ">
      {/* Two-column layout container */}
      <div className="flex items-center justify-between ">
        {/* Left column - Feature illustration */}
        <div className="w-1/2">
          <img
            className=""
            src="../../public/Images/Features/img.png"
            alt="features illustration"
          />
        </div>

        {/* Right column - Feature content */}
        <div className=" w-1/2 space-y-8">
          {/* Main heading with emoji */}
          <h1 className="text-5xl w-11/12 font-bold  items-center leading-16">
            Meet our premium features that will make you wow
            <img
              className=" inline-block ml-4 "
              src="../../public/Images/Features/emoji.png"
              alt="emoji"
            />
          </h1>

          {/* Description text */}
          <p className="text-gray-600 w-9/12 text-lg leading-9">
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform with amazing contents.
          </p>

          {/* Features list container */}
          <div className="space-y-6  ">
            {/* Feature 1 - Detailed description */}
            <div className="w-11/12 space-y-3 shadow-lg p-6 rounded">
              <h2 className="text-xl font-bold pb-4">
                Organize your project content
              </h2>
              <p className="text-gray-600 w-10/12   leading-9">
                Get your website ads tests delivered at let collect sample from
                the victory of the managments that supplies best design system
                which guidelines ever with multiple features.
              </p>
            </div>

            {/* Feature 2 - Expandable item */}
            <div className="flex w-11/12 items-center justify-between py-4 px-6 bg-[#F6F8FB]  rounded-xl">
              <h2 className="text-xl font-bold">
                Collaborate your multiple team support easily
              </h2>
              <img
                className="w-6"
                src="../../public/Images/Features/Forma 1.png"
                alt="arrow"
              />
            </div>
            <div className="flex w-11/12 items-center justify-between py-4 px-6 bg-[#F6F8FB]  rounded-xl">
              <h2 className="text-xl font-bold">
                Build your team's knowledge base system
              </h2>
              <img
                className="w-6"
                src="../../public/Images/Features/Forma 1.png"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
