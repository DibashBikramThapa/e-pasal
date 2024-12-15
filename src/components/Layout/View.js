import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ setMobileView, mobile_view, children }) {
  const setMobileView1 = (val) => {
    if (setMobileView) setMobileView(val);
  };

  return (
    <div className="px-2">
      <Navbar setMobileView={setMobileView1} mobile_view={mobile_view} />
      <main id="popup">
        {children}
        </main>
      <Footer mobile_view={mobile_view} />
    </div>
  );
}
