// Service component to display support service cards
const Service = () => {
  return (
    // Main container with flex layout
    <div className="flex items-center justify-center gap-10 my-24">
      {/* First service card with white background */}
      <div className="flex gap-6 w-[540px] p-10  shadow-md">
        <div>
          <img
            className="w-52"
            src="../../public/Images/Service-/Group 83.png"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Do you need help support</h1>{" "}
            <img src="../../public/Images/Service-/Forma 1.png" alt="" />
          </div>
          <p className=" leading-8  ">
            Get your website ads tests delivered at let collect sample from the
            victory of the update managments services.
          </p>
        </div>
      </div>

      {/* Second service card with light background */}
      <div className="flex gap-6 w-[540px] p-10  bg-[#F6F8FB]">
        <div>
          <img
            className="w-52"
            src="../../public/Images/Service-/Group 83.png"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Do you need help support</h1>{" "}
            <img src="../../public/Images/Service-/Forma 1.png" alt="" />
          </div>
          <p className=" leading-8  ">
            Get your website ads tests delivered at let collect sample from the
            victory of the update managments services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
