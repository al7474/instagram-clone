import React from "react";
import { useEffect, useState } from "react";
import SearchPanel from "./SearchPanel";
import InstagramLogo from "../../assets/logos/name_logo.png";
import InstagramGlyph from "../../assets/logos/logo.png";

import {
  FiHome,
  FiSearch,
  FiHeart,
  FiPlusSquare,
  FiMessageCircle,
  FiMoreHorizontal,
} from "react-icons/fi";
import { MdExplore, MdVideoLibrary } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import { TbCircleDotted } from "react-icons/tb";
import { PiThreadsLogo } from "react-icons/pi";

const Home: React.FC<{ user: string }> = ({ user }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isCompactSidebar, setIsCompactSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompactSidebar(window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`flex-shrink-0 flex flex-col py-6 px-2 border-r border-gray-800 min-h-screen transition-all duration-200
        ${showSearch || isCompactSidebar ? "w-100" : "w-100"}
        min-w-[56px] max-w-xs
      `}
      >
        <div className="mb-8 flex items-center w-full">
          {showSearch || isCompactSidebar ? (
            <img
              src={InstagramGlyph}
              alt="Instagram"
              width={32}
              height={32}
              style={{ filter: "invert(1)" }}
            />
          ) : (
            <img src={InstagramLogo} alt="Instagram" width={120} height={32} />
          )}
        </div>
        <nav className="flex flex-col gap-2 w-full items-start">
          <button
            className={`flex items-center ${
              showSearch || isCompactSidebar
                ? "gap-2 px-2 py-2 text-base"
                : "gap-4 px-3 py-3 text-lg"
            } font-bold text-white bg-black rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
            onClick={() => setShowSearch(false)}
          >
            <FiHome size={22} />
            {!(showSearch || isCompactSidebar) && <span>Home</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start bg-gray-900"
                : ""
            }`}
            onClick={() => setShowSearch(true)}
          >
            <FiSearch size={22} />
            {!(showSearch || isCompactSidebar) && <span>Search</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
          >
            <MdExplore size={22} />
            {!(showSearch || isCompactSidebar) && <span>Explore</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
          >
            <MdVideoLibrary size={22} />
            {!(showSearch || isCompactSidebar) && <span>Reels</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
          >
            <FiMessageCircle size={22} />
            {!(showSearch || isCompactSidebar) && <span>Messages</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
          >
            <FiHeart size={22} />
            {!(showSearch || isCompactSidebar) && <span>Notifications</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
          >
            <FiPlusSquare size={22} />
            {!(showSearch || isCompactSidebar) && <span>Create</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar
                ? "justify-center lg:justify-start"
                : ""
            }`}
          >
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="avatar"
              className="w-6 h-6 rounded-full"
            />
            {!(showSearch || isCompactSidebar) && <span>Profile</span>}
          </button>
        </nav>
        <div className="flex-1" />
        <nav className="flex flex-col gap-2 w-full items-start mt-8">
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar ? "justify-center" : ""
            }`}
          >
            <BiCircle size={22} />
            {!(showSearch || isCompactSidebar) && <span>Meta AI</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar ? "justify-center" : ""
            }`}
          >
            <TbCircleDotted size={22} />
            {!(showSearch || isCompactSidebar) && <span>AI Studio</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar ? "justify-center" : ""
            }`}
          >
            <PiThreadsLogo size={22} />
            {!(showSearch || isCompactSidebar) && <span>Threads</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${
              showSearch || isCompactSidebar ? "justify-center" : ""
            }`}
          >
            <FiMoreHorizontal size={22} />
            {!(showSearch || isCompactSidebar) && <span>More</span>}
          </button>
        </nav>
      </aside>
      {/* Search Panel */}
      {showSearch && <SearchPanel />}
      {/* Main Feed */}
      <main className=" py-8 px-4 max-w-[470px] ml-90">
        <div className=" flex flex-row lg:gap-20 gap-8 ">
          {/* Columna izquierda: Stories y Post */}
          <div className="items-center max-w-[470px] w-full mr-15">
            {/* Stories */}
            <div className="flex gap-4 mb-8 justify-center w-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-22 h-22 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "conic-gradient(from 210deg at 50% 50%, #f9ce34 0deg, #ee2a7b 120deg, #6228d7 240deg, #f9ce34 360deg)",
                      padding: "1px",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 1}`}
                        alt="story"
                        className="w-19 h-19 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs mt-1">user{i + 1}</span>
                </div>
              ))}
            </div>
            {/* Post */}
            <div className="bg-gray-900 rounded-lg w-[470px] mb-8 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="post"
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-bold">user1</span>
                  <span className="text-gray-400 text-xs ml-2">2d</span>
                </div>
                <div className="mb-2">A beautiful day at the lake!</div>
                <div className="flex gap-4 text-xl mb-2">
                  <span>❤️</span>
                  <span>💬</span>
                  <span>✈️</span>
                  <span className="ml-auto">🔖</span>
                </div>
                <div className="text-gray-400 text-xs">215,674 likes</div>
              </div>
            </div>
          </div>
          {/* Columna derecha: Suggestions */}
          <div className="flex flex-col w-[350px] lg:ml-12">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://i.pravatar.cc/150?img=10"
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-bold">{user}</div>
                <div className="text-gray-400 text-xs">Suggested for you</div>
              </div>
              <button className="ml-auto text-blue-400 font-bold text-sm">
                Switch
              </button>
            </div>
            <div className="mb-4 text-gray-400 font-semibold">
              Suggested for you
            </div>
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 11}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm">suggested{i + 1}</div>
                    <div className="text-gray-400 text-xs">
                      Followed by user{i + 2}
                    </div>
                  </div>
                  <button className="text-blue-400 font-bold text-xs">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
