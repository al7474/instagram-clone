import React from 'react';

const SearchPanel: React.FC = () => (
  <section className="fixed top-0 left-16 w-[400px] min-h-screen bg-black border-r border-gray-800 py-6 px-6 flex flex-col z-50">
    <span className="text-2xl font-bold block mb-4">Search</span>
    <div className="bg-gray-900 rounded-lg p-2 mb-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 text-lg focus:outline-none"
      />
    </div>
    <div className="flex items-center justify-between mb-2 px-2">
      <span className="font-semibold text-white">Recent</span>
      <button className="text-blue-400 text-sm font-bold">Clear all</button>
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-900 rounded-lg">
        <img src="https://i.pravatar.cc/150?img=1" alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-bold text-white flex items-center gap-1">
            honeymoon <span className="text-blue-400 text-xs">✔</span>
          </div>
          <div className="text-gray-400 text-xs">LANA DEL REY • Following</div>
        </div>
        <button className="ml-auto text-white text-xl">×</button>
      </div>
    </div>
  </section>
);

export default SearchPanel;
