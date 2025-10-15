import React from "react";
import InstagramLogo from '../../assets/logos/name_logo.png';
import InstagramGlyph from '../../assets/logos/logo.png';
import { FiHome, FiSearch, FiHeart, FiPlusSquare, FiMessageCircle, FiMoreHorizontal } from "react-icons/fi";
import { MdExplore, MdVideoLibrary } from "react-icons/md";

const Sidebar: React.FC<{
  showSearch: boolean;
  isCompactSidebar: boolean;
  setShowSearch: (v: boolean) => void;
}> = ({ showSearch, isCompactSidebar, setShowSearch }) => {
  return (
    <aside
      className={`flex-shrink-0 flex flex-col py-6 px-2 border-r border-gray-800 min-h-screen transition-all duration-200
        ${showSearch || isCompactSidebar ? "w-[72px] items-center" : "max-w-xs items-start w-[240px]"}
        min-w-[56px]
      `}
    >
    <div style={{ height: 56, display: 'flex', alignItems: 'center' }} className="w-full">
      {showSearch || isCompactSidebar ? (
        <img
          src={InstagramGlyph}
          alt="Instagram"
          width={32}
          height={32}
          style={{ filter: "invert(1)", marginBottom: 0, marginLeft: 12 }}
        />
      ) : (
        <img src={InstagramLogo} alt="Instagram" width={100} height={24} style={{ marginLeft: 20, opacity: 0.85 }} />
      )}
    </div>
      <nav className="flex flex-col gap-2 w-full items-start">
        <div className="flex flex-col w-full h-full">
          {/* Main options */}
          <div className="flex flex-col gap-2">
          <button className={`flex items-center px-0 py-3 text-lg font-bold text-white bg-black rounded-lg w-full`} onClick={() => setShowSearch(false)}>
            <div className="w-[48px] flex justify-center items-center">
              <FiHome size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Home</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${showSearch ? 'bg-gray-900' : ''}`} onClick={() => setShowSearch(true)}>
            <div className="w-[48px] flex justify-center items-center">
              <FiSearch size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Search</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <MdExplore size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Explore</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <MdVideoLibrary size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Reels</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <FiMessageCircle size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Messages</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <FiHeart size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Notifications</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <FiPlusSquare size={28}/>
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Create</span>}
          </button>
          <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-7 h-7 rounded-full" />
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">Profile</span>}
          </button>

           <button className={`flex items-center px-0 py-2 mt-80 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <FiMoreHorizontal size={28} />
            </div>
            {!showSearch && !isCompactSidebar && <span className="ml-3">More</span>}
          </button>

           <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
            <div className="w-[48px] flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <span className={`ml-3 transition-all duration-200 w-[140px] inline-block text-left ${showSearch || isCompactSidebar ? 'opacity-0 w-0' : 'opacity-100 w-[110px]'}`}>Also from Meta</span>
          </button>
          
        </div>
    
      </div>
    </nav>
 

    </aside>
  );

}
export default Sidebar;
