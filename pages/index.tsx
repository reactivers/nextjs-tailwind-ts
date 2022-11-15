import { NextPage } from "next/types";
import { AiFillHome } from "react-icons/ai";
import { TEST_VAR } from "utils/constants";

const Home: NextPage = () => {
  return (
    <div id="home-page-container" className="flex justify-center items-center">
      <div className="flex flex-col items-center text-5xl">
        <AiFillHome className="text-white mb-2" />
        <h3
          className="text-3xl text-white font-extralight"
          id="home-page-title"
        >
          HOME PAGE
        </h3>
        <h5
          className="text-xl text-white font-extralight"
          id="home-page-env-text"
        >
          {TEST_VAR}
        </h5>
      </div>
    </div>
  );
};

export default Home;
