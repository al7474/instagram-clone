import React from "react";
import InstagramLogo from '../../assets/logos/name_logo.png';
import InstagramGlyph from '../../assets/logos/logo.png';
import { FiHome, FiSearch, FiHeart, FiPlusSquare, FiMessageCircle, FiMoreHorizontal } from "react-icons/fi";
import { MdExplore, MdVideoLibrary } from "react-icons/md";


const Sidebar: React.FC = () => {
  const [compact, setCompact] = React.useState(false);

  return (
    <aside className={`flex-shrink-0 flex flex-col py-6 px-4 border-r border-gray-800 min-h-screen bg-black transition-all duration-200 ${compact ? 'w-[72px] items-center' : 'w-[240px] items-start'}`}>
      {/* Logo */}
      <div className="mb-8 pl-2 flex items-center justify-center" style={{ height: 56 }}>
        {!compact ? (
          <img src={InstagramLogo} alt="Instagram" width={120} height={32} style={{ opacity: 0.85 }} />
        ) : (
          <img src={InstagramGlyph} alt="Instagram" width={32} height={32} style={{ filter: 'invert(1)' }} />
        )}
      </div>
      {/* Main options */}
      <nav className="flex flex-col gap-2 w-full">
        <button className={`flex items-center px-0 py-3 text-lg font-bold text-white bg-black rounded-lg w-full`} onClick={() => setCompact(false)}>
          <div className="w-[48px] flex justify-center items-center">
            <FiHome size={28}/>
          </div>
          {!compact && <span className="ml-3">Home</span>}
        </button>
        <button className={`flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full ${compact ? 'bg-gray-900' : ''}`} onClick={() => setCompact(!compact)}>
          <div className="w-[48px] flex justify-center items-center">
            <FiSearch size={28}/>
          </div>
          {!compact && <span className="ml-3">Search</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <MdExplore size={28}/>
          </div>
          {!compact && <span className="ml-3">Explore</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <MdVideoLibrary size={28}/>
          </div>
          {!compact && <span className="ml-3">Reels</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <FiMessageCircle size={28}/>
          </div>
          {!compact && <span className="ml-3">Messages</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <FiHeart size={28}/>
          </div>
          {!compact && <span className="ml-3">Notifications</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <FiPlusSquare size={28}/>
          </div>
          {!compact && <span className="ml-3">Create</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-7 h-7 rounded-full" />
          </div>
          {!compact && <span className="ml-3">Profile</span>}
        </button>
      </nav>
      {/* Bottom options */}
      <div className="mt-auto flex flex-col gap-2 pb-4">
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <FiMoreHorizontal size={28} />
          </div>
          {!compact && <span className="ml-3">More</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full">
          <div className="w-[48px] flex justify-center items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          {!compact && <span className="ml-3">Also from Meta</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
