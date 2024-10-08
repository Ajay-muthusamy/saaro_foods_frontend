import React from "react";
import Lottie from "lottie-react";
import animationData from "../../animefiles/Animation - 1728323934657.json";
const Home = () => {
  return (
    <div>
      <main className="flex-col md:flex-row flex items-center justify-center space-x-9 " id="home">
        <div className="font-ubuntu ">
          <h2 className="text-[6vh] leading-[9vh] mt-3 x w-[50vh] text-center md:text-left md:text-[8vh] md:w-[70vh] md:leading-[10vh]">Indulge in the Sweetest <span className="text-rose-400">Delights</span></h2>
          <p className="text-center md:text-left ps-2 text-sm text-rose-400">Freshly made sweets delivered to your doorstep!</p>
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
