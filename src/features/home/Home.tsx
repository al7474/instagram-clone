import React from "react";
import Sidebar from "./Sidebar";

import Suggestions from "./Suggestions";


const Home: React.FC<{ user: string }> = ({ user }) => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [isCompactSidebar, setIsCompactSidebar] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsCompactSidebar(window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-black text-white min-h-screen flex flex-row">
      {/* Fixed-width sidebar container */}
      <div className="relative" style={{ width: 300, minWidth: 300 }}>
        <div className="absolute inset-0">
          <Sidebar showSearch={showSearch} isCompactSidebar={isCompactSidebar} setShowSearch={setShowSearch} />
        </div>
      </div>
      <div className="flex-1 relative">
        <main
          className="absolute left-1/2 top-0 transform -translate-x-1/2 pt-8 px-4 w-[calc(470px+350px)] flex flex-row lg:gap-20 gap-8 justify-center"
          style={{ maxWidth: 'calc(470px + 350px)' }}
        >
          {/* Columna izquierda: Stories y Post */}
          <div className="flex flex-col items-center max-w-[470px] w-full">
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
                      <img src={`https://i.pravatar.cc/150?img=${i+1}`} alt="story" className="w-19 h-19 rounded-full object-cover" />
                    </div>
                  </div>
                  <span className="text-xs mt-1">user{i+1}</span>
                </div>
              ))}
            </div>
            {/* Posts (scrollable) */}
            <div className="flex flex-col gap-8 w-full overflow-y-auto max-h-[calc(100vh-180px)] pr-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {/* Post 1 */}
              <div className="bg-gray-900 rounded-lg w-[470px] mx-auto">
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
              {/* Post 2 */}
              <div className="bg-gray-900 rounded-lg w-[470px] mx-auto">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="post" className="w-full h-[400px] object-cover rounded-t-lg" />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="https://i.pravatar.cc/150?img=2" alt="avatar" className="w-8 h-8 rounded-full" />
                    <span className="font-bold">user2</span>
                    <span className="text-gray-400 text-xs ml-2">1d</span>
                  </div>
                  <div className="mb-2">Sunset vibes 🌅</div>
                  <div className="flex gap-4 text-xl mb-2">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>✈️</span>
                    <span className="ml-auto">🔖</span>
                  </div>
                  <div className="text-gray-400 text-xs">98,123 likes</div>
                </div>
              </div>
              {/* Post 3 */}
              <div className="bg-gray-900 rounded-lg w-[470px] mx-auto">
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="post" className="w-full h-[400px] object-cover rounded-t-lg" />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="https://i.pravatar.cc/150?img=3" alt="avatar" className="w-8 h-8 rounded-full" />
                    <span className="font-bold">user3</span>
                    <span className="text-gray-400 text-xs ml-2">5h</span>
                  </div>
                  <div className="mb-2">Exploring the city 🏙️</div>
                  <div className="flex gap-4 text-xl mb-2">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>✈️</span>
                    <span className="ml-auto">🔖</span>
                  </div>
                  <div className="text-gray-400 text-xs">12,345 likes</div>
                </div>
              </div>
              {/* Post 4 */}
              <div className="bg-gray-900 rounded-lg w-[470px] mx-auto">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80" alt="post" className="w-full h-[400px] object-cover rounded-t-lg" />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="https://i.pravatar.cc/150?img=4" alt="avatar" className="w-8 h-8 rounded-full" />
                    <span className="font-bold">user4</span>
                    <span className="text-gray-400 text-xs ml-2">1h</span>
                  </div>
                  <div className="mb-2">Coffee break ☕</div>
                  <div className="flex gap-4 text-xl mb-2">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>✈️</span>
                    <span className="ml-auto">🔖</span>
                  </div>
                  <div className="text-gray-400 text-xs">2,345 likes</div>
                </div>
              </div>
            </div>
          </div>
          {/* Columna derecha: Suggestions */}
          <Suggestions user={user} />
        </main>
      </div>
    </div>
  );
};

export default Home;
