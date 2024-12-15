import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";

const NavbarItems = ({ mobile_view = false }) => {
  return (
    <div
      className={`flex justify-center ${
        mobile_view
          ? "gap-[1rem] justify-center flex-col text-black font-bold text-[1rem]"
          : "flex-row text-[1.2rem]"
      }`}
    >
      <Link href={"/"} className="">
        <h3
          className={`px-[1.2rem] ${
            mobile_view ? "border-bottom-2" : "translate-up"
          } font-sans`}
        >
          Home
        </h3>
      </Link>
      <Link href={"/#about"} className="">
        <h3
          className={`px-[1.2rem] ${
            mobile_view ? "border-bottom-2" : "translate-up"
          } font-sans`}
        >
          About
        </h3>
      </Link>
      <Link href={"/#contact"} className="">
        <h3
          className={`px-[1.2rem] ${
            mobile_view ? "border-bottom-2" : "translate-up"
          } font-sans`}
        >
          Contact
        </h3>
      </Link>
    </div>
  );
};

function Navbar({ setMobileView, mobile_view }) {
  const [loading, setLoading] = useState(true);

  const [mobile_navbar, setMobileNavbar] = useState(false);

  const handleMobileNavbar = () => {
    setMobileNavbar(!mobile_navbar);
  };

  const handleResize = () => {
    // Perform actions on window resize
    if (window?.outerWidth <= 1100) {
      setMobileView(true);
    } else {
      setMobileView(false);
      setMobileNavbar(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-between py-2`}>
      {!loading ? (
        <>
          <Link href={"/"} className="p-2">
            <span className="ml-[1rem] flex items-center">
              <h2
                className='logo-text'
              >Suva Kantipur</h2>
            </span>
          </Link>

          {!mobile_view ? (
            <>
              <div className="flex mb-6 items-end max-w-[22rem]">
                <NavbarItems mobile_view={mobile_view} />
              </div>
              <div className="shrink pt-3">
                <div className="text-center flex justify-center mr-[3rem]">
                  <FaCartArrowDown/>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="justify-self-end px-6 py-3"
                onClick={handleMobileNavbar}
              >
                <GiHamburgerMenu className="text-4xl" />
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}
      {mobile_navbar ? (
        <div
          className={`text-black flex flex-col mt-[5rem] px-[1rem] pt-[1.1rem] pb-[1rem] absolute w-full bg-white z-[60] rounded-[1.5rem]`}
        >
          <NavbarItems mobile_view={mobile_view} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
