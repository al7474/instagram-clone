
import { FiHome, FiSearch, FiPlusSquare } from "react-icons/fi";
import { MdVideoLibrary } from "react-icons/md";

interface BottomNavProps {
  onReelsClick?: () => void;
}

export default function BottomNav({ onReelsClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
      <div className=" mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center justify-center text-white" aria-label="Home">
            <div className="w-10 h-10 flex items-center justify-center">
              <FiHome size={22} />
            </div>
          </button>

          <button className="flex flex-col items-center justify-center text-white" aria-label="Search">
            <div className="w-10 h-10 flex items-center justify-center">
              <FiSearch size={22} />
            </div>
          </button>

          <button className="flex flex-col items-center justify-center text-white" aria-label="Reels" onClick={onReelsClick}>
            <div className="w-10 h-10 flex items-center justify-center">
              <MdVideoLibrary size={22} />
            </div>
          </button>

          <button className="flex flex-col items-center justify-center text-white" aria-label="Create">
            <div className="w-10 h-10 flex items-center justify-center">
              <FiPlusSquare size={22} />
            </div>
          </button>

          <button className="flex flex-col items-center justify-center text-white" aria-label="Profile">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-7 h-7 rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
