import React from "react";
import Footer from "../Footer/Footer";
import SetAGoal from "./SetAGoal";
import GetMoreDone from "./get-more-done/GetMoreDone";
import "./landingpage.css";
import NavBar from "../Navbar/NavBar2";
import BackToTop from "../backtotop/BackToTop";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <NavBar />
      {/* The first section in the landingpage  */}
      <SetAGoal />

      <GetMoreDone />

      {/* The last section in the landingpage  */}
      {/* SECTION - "SATISFYING OVER 1B" starts*/}

      {/* SECTION - "SATISFYING OVER 1B" ends*/}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default LandingPage;

// fevil was here
