import React from 'react';
import InstagramLogo from '../../assets/logos/name_logo.png';
import { FiHome, FiSearch, FiHeart, FiPlusSquare, FiMessageCircle, FiMoreHorizontal } from 'react-icons/fi';
import { MdExplore, MdVideoLibrary } from 'react-icons/md';
import { BiCircle } from 'react-icons/bi';
import { TbCircleDotted } from 'react-icons/tb';
import { PiThreadsLogo } from 'react-icons/pi';

const Home: React.FC<{ user: string }> = ({ user }) => {
  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 flex flex-col py-6 px-4 border-r border-gray-800 min-h-screen">
        <div className="mb-8 flex items-center w-full pl-2 pt-3">
          <img src={InstagramLogo} alt="Instagram" width={120} height={32} />
        </div>
        <nav className="flex flex-col gap-2 w-full">
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-bold text-white bg-black rounded-lg">
            <FiHome size={24}/> <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <FiSearch size={24}/> <span>Search</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <MdExplore size={24}/> <span>Explore</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <MdVideoLibrary size={24}/> <span>Reels</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <FiMessageCircle size={24}/> <span>Messages</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <FiHeart size={24}/> <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <FiPlusSquare size={24}/> <span>Create</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-6 h-6 rounded-full" /> <span>Profile</span>
          </a>
        </nav>
        <div className="flex-1" />
        <nav className="flex flex-col gap-2 w-full mt-8">
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <BiCircle size={24}/> <span>Meta AI</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <TbCircleDotted size={24}/> <span>AI Studio</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <PiThreadsLogo size={24}/> <span>Threads</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-3 py-2 text-lg font-normal text-white hover:bg-gray-900 rounded-lg">
            <FiMoreHorizontal size={24}/> <span>More</span>
          </a>
        </nav>
      </aside>
      {/* Main Feed */}
      <main className="flex-1 flex flex-col items-center py-8 px-4 min-h-screen">
        {/* Stories */}
        <div className="flex gap-4 mb-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-22 h-22 rounded-full flex items-center justify-center"
                style={{
                  background: 'conic-gradient(from 210deg at 50% 50%, #f9ce34 0deg, #ee2a7b 120deg, #6228d7 240deg, #f9ce34 360deg)',
                  padding: '1px',
                }}
              >
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                  <img src={`https://i.pravatar.cc/150?img=${i+1}`} alt="story" className="w-19 h-19 rounded-full object-cover" />
                </div>
              </div>
              <span className="text-xs mt-1">user{i+1}</span>
            </div>
          ))}
        </div>
        {/* Post */}
        <div className="bg-gray-900 rounded-lg w-[470px] mb-8">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="post" className="w-full h-[400px] object-cover rounded-t-lg" />
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-8 h-8 rounded-full" />
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
      </main>
      {/* Suggestions */}
  <aside className="w-[350px] flex-shrink-0 py-8 px-4 border-l border-gray-800 min-h-screen">
        <div className="flex items-center gap-3 mb-8">
          <img src="https://i.pravatar.cc/150?img=10" alt="avatar" className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-bold">{user}</div>
            <div className="text-gray-400 text-xs">Suggested for you</div>
          </div>
          <button className="ml-auto text-blue-400 font-bold text-sm">Switch</button>
        </div>
        <div className="mb-4 text-gray-400 font-semibold">Suggested for you</div>
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={`https://i.pravatar.cc/150?img=${i+11}`} alt="avatar" className="w-8 h-8 rounded-full" />
              <div className="flex-1">
                <div className="font-bold text-sm">suggested{i+1}</div>
                <div className="text-gray-400 text-xs">Followed by user{i+2}</div>
              </div>
              <button className="text-blue-400 font-bold text-xs">Follow</button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Home;
