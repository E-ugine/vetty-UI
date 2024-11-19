import { useState } from "react";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";

const videos = [
  "https://tecdn.b-cdn.net/img/video/Tropical.mp4",
  "https://tecdn.b-cdn.net/img/video/forest.mp4",
  "https://tecdn.b-cdn.net/img/video/Agua-natural.mp4"
];

const Row1 = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    // Move to the next video, loop back to the first video at the end of the list
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
  };

  return (
    <div className="flex flex-row ">
      {/* Left Sidebar */}
      <div className="text-gray-700 w-64 flex-shrink-0 hidden xl:block">
        <nav className="py-6">
          <ul>
            {Array.from({ length: 9 }, (_, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8 ease-in-out duration-300 transform hover:translate-x-4"
              >
                <Link to="/allProducts">
                  {i18n.t(`homeSections.row1.col1.${index}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Vertical Line */}
      <div className="border-l border-gray-300 hidden xl:block"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center  justify-center xl:my-10 xl:ml-10 xl:gap-16 text-black w-full h-full">
        {/* Section Title */}
        <h1 className="text-xl mb-4">Pet Accessories</h1>
        <p>We strive to enhance the lives and bonds between pets and their people. Our goal is to be your trusted local, neighborhood pet store, because after all, we speak pet!

</p>
        {/* Video Player */}
        <div className="w-full h-96 p-4">
          <video
            key={currentVideo}
            className="w-full h-full object-cover"
            src={videos[currentVideo]}
            autoPlay
            loop={false}
            muted
            onEnded={handleVideoEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default Row1;
