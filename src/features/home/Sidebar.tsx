import React from "react";
import InstagramLogo from '../../assets/logos/name_logo.png';
import InstagramGlyph from '../../assets/logos/logo.png';
import { FiHome, FiSearch, FiHeart, FiPlusSquare, FiMessageCircle, FiMoreHorizontal } from "react-icons/fi";
import { MdExplore, MdVideoLibrary } from "react-icons/md";

const Sidebar: React.FC<{
  showSearch: boolean;
  isCompactSidebar: boolean;
  setShowSearch: (v: boolean) => void;
}> = ({ showSearch, isCompactSidebar, setShowSearch }) => (
  <aside
    className={`flex-shrink-0 flex flex-col py-6 px-2 border-r border-gray-800 min-h-screen transition-all duration-200
      ${showSearch || isCompactSidebar ? "w-[72px] items-center" : "max-w-xs items-start w-[240px]"}
      min-w-[56px]
    `}
  >
    <div style={{ height: 40, display: 'flex', alignItems: 'center' }} className="w-full">
      {showSearch || isCompactSidebar ? (
        <img
          src={InstagramGlyph}
          alt="Instagram"
          width={25}
          height={25}
          style={{ filter: "invert(1)", marginBottom: 4 }}
        />
      ) : (
        <img src={InstagramLogo} alt="Instagram" width={90} height={24} style={{ marginLeft: 12, opacity: 0.85 }} />
      )}
    </div>
    <nav className="flex flex-col gap-2 w-full items-start">
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-3' : 'gap-4 px-3 py-3'} text-lg font-bold text-white bg-black rounded-lg w-full`} onClick={() => setShowSearch(false)}>
        <FiHome size={22}/>
        {!showSearch && !isCompactSidebar && <span>Home</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${showSearch ? 'bg-gray-900' : ''}`} onClick={() => setShowSearch(true)}>
        <FiSearch size={22}/>
        {!showSearch && !isCompactSidebar && <span>Search</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
        <MdExplore size={22}/>
        {!showSearch && !isCompactSidebar && <span>Explore</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
        <MdVideoLibrary size={22}/>
        {!showSearch && !isCompactSidebar && <span>Reels</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
        <FiMessageCircle size={22}/>
        {!showSearch && !isCompactSidebar && <span>Messages</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
        <FiHeart size={22}/>
        {!showSearch && !isCompactSidebar && <span>Notifications</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
        <FiPlusSquare size={22}/>
        {!showSearch && !isCompactSidebar && <span>Create</span>}
      </button>
      <button className={`flex items-center ${showSearch || isCompactSidebar ? 'justify-center px-0 py-2' : 'gap-4 px-3 py-2'} text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full`}>
        <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-6 h-6 rounded-full" />
        {!showSearch && !isCompactSidebar && <span>Profile</span>}
      </button>
    </nav>
    <div className="flex-1" />
    <nav className="flex flex-col gap-2 w-full items-start mt-8">
      {!showSearch && !isCompactSidebar && (
        <>
          <button className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
            <FiMoreHorizontal size={22} />
            <span>More</span>
          </button>
          <button className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span>Also from Meta</span>
          </button>
        </>
      )}
    </nav>
  </aside>
);

export default Sidebar;
