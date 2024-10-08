import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import animationData from "../../animefiles/Animation - 1728323934657.json";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main
        className="flex-col md:flex-row flex items-center justify-center space-x-9 "
        id="home"
      >
        <div className="font-ubuntu ">
          <h2 className="text-[6vh] leading-[9vh] mt-3 x w-[50vh] text-center md:text-left md:text-[8vh] md:w-[70vh] md:leading-[10vh]">
            Indulge in the Sweetest{" "}
            <span className="text-rose-400">Delights</span>
          </h2>
          <p className="text-center md:text-left ps-2 text-sm text-rose-400">
            Freshly made sweets delivered to your doorstep!
          </p>
          <div className="flex justify-centers">
            <button
              className="shop-now-btn text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none animated-gradient mt-5"
              onClick={() => navigate("/shop-now")}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-96 md:w-[90vh]"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
