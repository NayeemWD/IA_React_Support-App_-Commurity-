import navLogo from "../../public/Images/Naver/S 1.png";
import searchIcon from "../../public/Images/Naver/search.png";
import lockIcon from "../../public/Images/Naver/lock.png";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-[#FFFCF7] pr-10 pb-28">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>Adversite</summary>
                </details>
              </li>
              <li>
                <details>
                  <summary>Supports</summary>
                </details>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <img src={navLogo} alt="startup logo" />
            <a className="btn btn-ghost text-2xl font-bold">StartupLand</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Adversite</summary>
              </details>
            </li>
            <li>
              <details>
                <summary>Supports</summary>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
            <img className="p-2" src={searchIcon} alt="search icon" />
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn gap-3 bg-[#FFFCF7] border-none">
            <img src={lockIcon} alt="lock icon" />
            Login
          </a>
          <a className="btn bg-[#FFF0D7] text-[#E5A740] border-none">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
