import React from 'react';

const Home: React.FC<{ user: string }> = ({ user }) => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-[250px] flex flex-col items-end py-6 px-4 border-r border-gray-800 min-h-screen">
        <div className="text-2xl font-bold mb-8">Instagram</div>
        <nav className="flex flex-col gap-4 w-full">
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>🏠</span> Home
          </a>
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>🔍</span> Search
          </a>
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>🎬</span> Reels
          </a>
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>💬</span> Messages
          </a>
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>🔔</span> Notifications
          </a>
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>➕</span> Create
          </a>
          <a href="#" className="flex items-center gap-3 text-lg font-medium hover:text-gray-300">
            <span>👤</span> Profile
          </a>
        </nav>
        <div className="mt-auto flex items-center gap-2 text-gray-400 text-sm">
          <span>⚙️</span> More
        </div>
      </aside>
      {/* Feed */}
      <main className="flex-1 flex flex-col items-center py-8 px-4 min-h-screen">
        {/* Stories */}
        <div className="flex gap-4 mb-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center border-4 border-black">
                <img src={`https://i.pravatar.cc/150?img=${i+1}`} alt="story" className="w-14 h-14 rounded-full object-cover" />
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
      <aside className="w-[350px] py-8 px-4 border-l border-gray-800 min-h-screen">
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
