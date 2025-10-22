const PricingPlan = () => {
  return (
    <div className=" pt-20 bg-[#F9FAFC]">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-12">
        <h1 className="text-4xl font-bold">What deal suit you perfect</h1>
        <p className="text-gray-500">Meet our pricing plan</p>
      </div>

      {/* Plan Toggle */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <p className="flex items-center gap-3 text-lg">
          Monthly Plan
          <span className="inline-block w-12">
            <img
              src="../../public/Images/PricingPlan/Group 85.png"
              alt="toggle"
            />
          </span>
          Annual Plan
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex justify-center gap-8 ">
        {/* Startup Pack Card */}
        <div className="w-[400px] p-8 bg-white rounded-xl  hover:shadow-lg transition-shadow">
          <div className=" mb-6">
            <h2 className="text-2xl font-bold pb-2">Startup Pack</h2>
            <h3 className="text-3xl font-bold text-[#FFA740]">$25.99/mo</h3>
            <p className="text-gray-500 w-10/12 leading-8 pt-6">
              For the startup team who work with new come data stack
            </p>
          </div>
          <hr className=" border-gray-300 my-6 " />
          <ul class=" space-y-2 ">
            <li class="flex  gap-2">
              <span>
                <img
                  src="../../public/Images/PricingPlan/Combined shape 16072.png"
                  alt=""
                />
              </span>
              <span className="w-10/12">
                Ultimate access to all course, exercises and assessmentsn
              </span>
            </li>
            <li class="flex  gap-2">
              <span>
                <img src="../../public/Images/PricingPlan/Combined shape 16072.png" />
              </span>
              <span className="w-10/12">
                Free acess for all kind of exercise corrections with downloads.
              </span>
            </li>
            <li class="flex items-center gap-2">
              <span>
                <img src="../../public/Images/PricingPlan/Combined shape 16072.png" />
              </span>
              <span className="w-10/12">
                Total assessment corrections with free download access system
              </span>
            </li>
            <li class="flex items-center gap-2">
              <span>
                <img src="../../public/Images/PricingPlan/Group.png" />
              </span>
              <span className="w-10/12">
                Unlimited download of courses on the mobile app contents
              </span>
            </li>
          </ul>
          <hr className="border-gray-300 my-6" />
          <button className="bg-[#FFF0D7] text-[#ff9820] py-3 px-4 rounded-lg hover:bg-[#ff9820] hover:text-white transition-colors">
            Start Free Trial
          </button>
        </div>

        {/* Premium Pack Card */}
        <div className="w-[400px] p-8 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <h2 className="text-2xl font-bold pb-2">Premium Pack</h2>
            <h3 className="text-3xl font-bold text-[#FFA740]">$49.99/mo</h3>
            <p className="text-gray-500 w-10/12 leading-8 pt-6">
              For the Pro users who work with modern data stack
            </p>
          </div>
          <hr className="border-gray-300 my-6" />
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span>
                <img
                  src="../../public/Images/PricingPlan/Combined shape 16072.png"
                  alt=""
                />
              </span>
              <span className="w-10/12">
                Ultimate access to all course, exercises and assessments
              </span>
            </li>
            <li className="flex gap-2">
              <span>
                <img src="../../public/Images/PricingPlan/Combined shape 16072.png" />
              </span>
              <span className="w-10/12">
                Free acess for all kind of exercise corrections with downloads.
              </span>
            </li>
            <li className="flex gap-2">
              <span>
                <img src="../../public/Images/PricingPlan/Combined shape 16072.png" />
              </span>
              <span className="w-10/12">
                Total assessment corrections with free download access system
              </span>
            </li>
            <li className="flex gap-2">
              <span>
                <img src="../../public/Images/PricingPlan/Combined shape 16072.png" />
              </span>
              <span className="w-10/12">
                Unlimited download of courses on the mobile app contents
              </span>
            </li>
          </ul>
          <hr className="border-gray-300 my-6" />
          <button className="bg-[#FFC059] text-white py-3 px-4 rounded-lg hover:bg-[#ff9820] transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
