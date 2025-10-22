import bannerGroup from "../../public/Images/Banner/Group.png";
import paypalLogo from "../../public/Images/Banner/paypal.png";
import googleLogo from "../../public/Images/Banner/google.png";
import dropboxLogo from "../../public/Images/Banner/Dropbox_logo_2017.png";

const Banner = () => {
  return (
    <div className="bg-[#FFFCF7] ">
      <div className="card  lg:card-side  flex-row-reverse ">
        <figure className="w-1/2 mb-10">
          <img className="" src={bannerGroup} alt="Banner illustration" />
        </figure>
        <div className="card-body pt-0 pr-0 mr-8 flex-col w-1/2">
          <h2 className="card-title font-bold text-6xl pb-9 leading-20">
            Ultimate support system for leading agencies
          </h2>
          <p className="grow-0  w-2/3 text-lg pb-4 leading-10">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <div className="join gap-2">
            <div>
              <label className="input validator join-item rounded-md">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  className="placeholder-gray-400"
                  type="email"
                  placeholder="Enter Email address"
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item rounded-md bg-[#FFC059] border-none text-white">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4">
            <p className="text-gray-400 grow-0 ">Sponsored by:</p>
            <div className="flex gap-6">
              <img src={paypalLogo} alt="PayPal" />
              <img src={googleLogo} alt="Google" />
              <img src={dropboxLogo} alt="Dropbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
