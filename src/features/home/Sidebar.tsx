import { BsWhatsapp, BsThreads, BsGrid3X3Gap } from "react-icons/bs";
import { PiCirclesFourBold } from "react-icons/pi";
const MetaMenu: React.FC<{ open: boolean; onClose: () => void }> = ({ open }) => {
  if (!open) return null;
  return (
    <div className="absolute left-20 bottom-2 bg-[#232323] border border-gray-800 rounded-xl shadow-lg w-64 z-50 p-2 flex flex-col gap-1 animate-fade-in" style={{ minWidth: 220 }}>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-gray-700 text-white text-base outline-none" tabIndex={0} autoFocus>
        <span className="rounded-full border-2 border-white w-5 h-5 flex items-center justify-center"><span className="block w-3 h-3 bg-black rounded-full" /></span>
        Meta AI
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base">
        <PiCirclesFourBold size={20} /> AI Studio
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base">
        <BsThreads size={20} /> Threads
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base">
        <BsWhatsapp size={20} /> WhatsApp
      </button>
    </div>
  );
};
import { FiSettings, FiBookmark, FiLogOut } from "react-icons/fi";
import { MdOutlineSwitchAccount, MdOutlineDarkMode, MdOutlineReportProblem } from "react-icons/md";
interface MoreMenuProps {
  open: boolean;
  onLogout: () => void;
  menuRef?: React.RefObject<HTMLDivElement>;
}
const MoreMenu: React.FC<MoreMenuProps> = ({ open, onLogout, menuRef }) => {
  if (!open) return null;
  console.log('MoreMenu rendered');
  return (
    <div ref={menuRef} className="absolute left-20 bottom-20 bg-[#232323] border border-gray-800 rounded-xl shadow-lg w-72 z-50 p-2 flex flex-col gap-1 animate-fade-in" style={{ minWidth: 260 }}>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-gray-700 text-white text-base outline-none" tabIndex={0} autoFocus onClick={() => console.log('Settings clicked')}>
        <FiSettings size={20} /> Settings
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base" onClick={() => console.log('Your activity clicked')}>
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 3v4a1 1 0 0 0 1 1h4"/></svg>
        Your activity
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base" onClick={() => console.log('Saved clicked')}>
        <FiBookmark size={20} /> Saved
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base" onClick={() => console.log('Switch appearance clicked')}>
        <MdOutlineDarkMode size={20} /> Switch appearance
      </button>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base" onClick={() => console.log('Report a problem clicked')}>
        <MdOutlineReportProblem size={20} /> Report a problem
      </button>
      <div className="border-t border-gray-700 my-2" />
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-white text-base" onClick={() => console.log('Switch accounts clicked')}>
        <MdOutlineSwitchAccount size={20} /> Switch accounts
      </button>
 
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-red-400 text-base" onClick={() => { console.log('Log out button (MoreMenu) clicked'); onLogout(); }}>
        <FiLogOut size={20} /> Log out
      </button>
    </div>
  );
};
import React from "react";
import InstagramLogo from '../../assets/logos/name_logo.png';
import InstagramGlyph from '../../assets/logos/logo.png';
import { FiHome, FiSearch, FiHeart, FiPlusSquare, FiMessageCircle, FiMoreHorizontal } from "react-icons/fi";
import { MdExplore, MdVideoLibrary } from "react-icons/md";




interface SidebarProps {
  forceCompact?: boolean;
  onSearchClick?: () => void;
  onHomeClick?: () => void;
  onLogout?: () => void;
  onExploreClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ forceCompact = false, onSearchClick, onHomeClick, onLogout, onExploreClick }) => {
  const [showMeta, setShowMeta] = React.useState(false);
  const metaBtnRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    function handleClickOutsideMeta(e: MouseEvent) {
      if (showMeta && metaBtnRef.current && !metaBtnRef.current.contains(e.target as Node)) {
        setShowMeta(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutsideMeta);
    return () => document.removeEventListener('mousedown', handleClickOutsideMeta);
  }, [showMeta]);
  const [compact, setCompact] = React.useState(false);

  React.useEffect(() => {
    setCompact(!!forceCompact || window.innerWidth <= 1300);
    const handleResize = () => {
      if (!forceCompact) {
        setCompact(window.innerWidth <= 1300);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [forceCompact]);

  const [showMore, setShowMore] = React.useState(false);
  const moreBtnRef = React.useRef<HTMLButtonElement>(null);
  const moreMenuRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        showMore &&
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target as Node) &&
        moreBtnRef.current &&
        !moreBtnRef.current.contains(e.target as Node)
      ) {
        setShowMore(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMore]);
  return (
    <aside className={`flex-shrink-0 flex flex-col py-6 px-4 border-r border-gray-800 min-h-screen bg-black transition-all duration-200 ${compact ? 'w-[72px] items-center' : 'w-[300px] items-start'} relative`}>
      {/* Logo */}
      <div className="mb-8 flex items-center justify-center" style={{ height: 56 }}>
        {!compact ? (
          <img src={InstagramLogo} alt="Instagram" width={120} height={32} className="pl-2" style={{ opacity: 0.85 }} />
        ) : (
          <img src={InstagramGlyph} alt="Instagram" width={32} height={32} style={{ filter: 'invert(1)' }} />
        )}
      </div>
      {/* Main options */}
      <nav className="flex flex-col gap-2 w-full">
        <button className="flex items-center px-0 py-3 text-lg font-bold text-white bg-black hover:bg-gray-900 rounded-lg w-full" onClick={() => {
          setCompact(false);
          if (onHomeClick) onHomeClick();
        }}>
          <div className="w-[48px] flex justify-center items-center">
            <FiHome size={28}/>
          </div>
          {!compact && <span className="ml-3">Home</span>}
        </button>
  <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full" onClick={onSearchClick}>
          <div className="w-[48px] flex justify-center items-center">
            <FiSearch size={28}/>
          </div>
          {!compact && <span className="ml-3">Search</span>}
        </button>
        <button className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full" onClick={onExploreClick}>
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
      <div className="mt-auto flex flex-col gap-2 pb-4 relative w-full">
        <button ref={moreBtnRef} className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full focus:outline-none" onClick={() => setShowMore((v) => !v)}>
          <div className="w-[48px] flex justify-center items-center">
            <FiMoreHorizontal size={28} />
          </div>
          {!compact && <span className="ml-3">More</span>}
        </button>
  <MoreMenu open={showMore} onLogout={() => { console.log('Logout button clicked'); if (onLogout) onLogout(); setShowMore(false); }}  />
        <button ref={metaBtnRef} className="flex items-center px-0 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg w-full focus:outline-none" onClick={() => setShowMeta((v) => !v)}>
          <div className="w-[48px] flex justify-center items-center">
            <BsGrid3X3Gap size={24} />
          </div>
          {!compact && <span className="ml-3 ">Also from Meta</span>}
        </button>
        <MetaMenu open={showMeta} onClose={() => setShowMeta(false)} />
      </div>
    </aside>
  );
}

export default Sidebar;
