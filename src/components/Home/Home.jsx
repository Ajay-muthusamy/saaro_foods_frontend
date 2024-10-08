import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./home.css"; // Import your custom styles

const Home = () => {
  const [sliderHeight, setSliderHeight] = useState("30%");

  const updateSliderHeight = () => {
    if (window.innerWidth < 768) {
      setSliderHeight("22%"); // Height for mobile
    } else {
      setSliderHeight("30%"); // Height for desktop
    }
  };

  useEffect(() => {
    // Set initial slider height
    updateSliderHeight();

    // Add resize event listener
    window.addEventListener("resize", updateSliderHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSliderHeight);
    };
  }, []);

  return (
    <div className="slider-container bg-white z-20">
      <main>
        <AwesomeSlider style={{ "--slider-height-percentage": sliderHeight }}>
          <div>
            <img
              src="https://www.sweetkadai.com/modules/labslideshow/images/e93e19c882cfa5cb4914ba9af1e7547516de2699_Sweetkadai-banner.jpg"
              alt="Sweetkadai Banner"
            />
          </div>
          <div>
            <img
              src="https://www.sweetkadai.com/modules/labslideshow/images/92901021a8c3cb2ade4a7c068be7b235478a39e6_Diwali-utsav.jpg"
              alt="Diwali Utsav"
            />
          </div>
        </AwesomeSlider>
      </main>
    </div>
  );
};

export default Home;
