import React from "react";

interface SuggestionsProps {
  user: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({ user }) => {
  return (
    <div className="flex flex-col  lg:ml-12">
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
    </div>
  );
};

export default Suggestions;
