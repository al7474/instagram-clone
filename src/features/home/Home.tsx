import React from "react";
import Sidebar from "./Sidebar";
import Suggestions from "./Suggestions";

const Home: React.FC<{ user: string }> = ({ user }) => {
  const [prClass, setPrClass] = React.useState('pr-50');
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1500) {
        setPrClass('pr-50');
      } else {
        setPrClass('pr-10');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [sidebarWidth, setSidebarWidth] = React.useState(300);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1300) {
        setSidebarWidth(100);
      } else {
        setSidebarWidth(300);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  React.useEffect(() => {
    const handleResize = () => {
      setShowSuggestions(window.innerWidth > 1160);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="bg-black text-white min-h-screen flex flex-row">
      {/* Fixed-width sidebar container */}
      <div className="relative" style={{ width: sidebarWidth, minWidth: sidebarWidth }}>
        <Sidebar />
      </div>
      <div className="flex-1 relative">
  <main className={`${prClass} absolute left-1/2 top-0 transform -translate-x-1/2 pt-8 px-2 flex flex-col lg:flex-row lg:gap-20 gap-8 justify-center w-full max-w-full h-[calc(100vh-32px)]`}>
          {/* Scrollable main area with two columns, responsive */}
          <div className="flex flex-col lg:flex-row w-full h-full overflow-y-auto max-h-full scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {/* Columna 1: historias y posts */}
            <div className="flex flex-col items-center flex-1 min-w-[630px]">
              {/* Stories */}
              <div className="flex gap-4 mb-8 justify-center w-full flex-wrap">
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
              {/* Posts */}
              {[
                {
                  img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
                  avatar: "https://i.pravatar.cc/150?img=1",
                  user: "user1",
                  time: "2d",
                  desc: "A beautiful day at the lake!",
                  likes: "215,674 likes",
                },
                {
                  img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
                  avatar: "https://i.pravatar.cc/150?img=2",
                  user: "user2",
                  time: "1d",
                  desc: "Sunset vibes 🌅",
                  likes: "98,123 likes",
                },
                {
                  img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
                  avatar: "https://i.pravatar.cc/150?img=3",
                  user: "user3",
                  time: "5h",
                  desc: "Exploring the city 🏙️",
                  likes: "12,345 likes",
                },
                {
                  img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
                  avatar: "https://i.pravatar.cc/150?img=4",
                  user: "user4",
                  time: "1h",
                  desc: "Coffee break ☕",
                  likes: "2,345 likes",
                },
              ].map((post, i) => (
                <div key={i} className="bg-gray-900 rounded-lg w-full mx-auto mb-8 min-w-0 max-w-[470px]">
                  <img
                    src={post.img}
                    alt="post"
                    className="w-full h-[400px] object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={post.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="font-bold">{post.user}</span>
                      <span className="text-gray-400 text-xs ml-2">
                        {post.time}
                      </span>
                    </div>
                    <div className="mb-2 break-words">{post.desc}</div>
                    <div className="flex gap-4 text-xl mb-2">
                      <span>❤️</span>
                      <span>💬</span>
                      <span>✈️</span>
                      <span className="ml-auto">🔖</span>
                    </div>
                    <div className="text-gray-400 text-xs">{post.likes}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Columna 2: sugerencias */}
            {showSuggestions && (
              <div className="flex flex-col w-full lg:w-[350px] min-w-0 mt-6 lg:mt-3 ml-20">
                <Suggestions user={user} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
