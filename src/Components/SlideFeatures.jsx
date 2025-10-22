const SlideFeatures = () => {
  return (
    // Main container with dark background
    <div className="bg-[#353448] pt-16 grid justify-end ">
      <div className="container ">
        {/* Tab navigation image */}
        <img
          className="mb-10"
          src="../../public/Images/SlideFeatures/tab section.png"
          alt="tab navigation"
        />
        {/* Two-column layout container */}
        <div className="flex items-center justify-between gap-10">
          {/* Left column - Content section */}
          <div className="w-2/5 text-white space-y-6">
            {/* Feature heading */}
            <h1 className="text-4xl font-bold leading-tight">
              Introduce quality feature that boost your website rank &
              performance
            </h1>
            {/* Feature description */}
            <p className="text-gray-300 leading-8">
              Build an incredible workplace and grow your business with Gusto's
              all-in-one platform with amazing contents. Get your tests
              delivered at let home collect sample from the victory of the
              supplies design system.
            </p>
            {/* Call-to-action button */}
            <button className="bg-[#FFC059] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#ffb033] transition-colors">
              More Details
            </button>
          </div>
          {/* Right column - Feature preview image */}
          <div className="">
            <img
              className="w-full"
              src="../../public/Images/SlideFeatures/Mask Group.png"
              alt="dashboard preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFeatures;
