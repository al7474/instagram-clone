import React from "react";

interface SuggestionsProps {
  user: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({ user }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center mb-6">
        <img src="https://i.pravatar.cc/150?img=10" alt="avatar" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-3 flex-1">
          <span className="font-bold leading-tight">{user}</span>
          <span className="text-gray-400 text-xs leading-tight">@yyyy</span>
        </div>
            <button className="text-blue-400 font-bold text-sm ml-2 sm:ml-4">Switch</button>
      </div>
      <div className="mb-3 flex items-center">
        <span className="text-gray-400 font-semibold">Suggested for you</span>
        <button className="text-xs font-bold text-white hover:text-gray-300 ml-auto">See All</button>
      </div>
  <div className="flex flex-col gap-4">
        {[
          {
            name: "cristianmaya2",
            img: "https://i.pravatar.cc/150?img=11",
            info: "Suggested for you",
          },
          {
            name: "narvaez_alexander1",
            img: "https://i.pravatar.cc/150?img=12",
            info: "Suggested for you",
          },
          {
            name: "vanesasantacruz_",
            img: "https://i.pravatar.cc/150?img=13",
            info: "Suggested for you",
          },
          {
            name: "andrea_7898",
            img: "https://i.pravatar.cc/150?img=14",
            info: "Followed by samgzzr",
          },
          {
            name: "marimcisn",
            img: "https://i.pravatar.cc/150?img=15",
            info: "Suggested for you",
          },
        ].map((s, i) => (
          <div key={i} className="flex items-center mb-2">
            <img src={s.img} alt="avatar" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col ml-3 flex-1">
              <span className="font-bold text-sm leading-tight">{s.name}</span>
              <span className="text-gray-400 text-xs leading-tight">{s.info}</span>
            </div>
              <button className="text-blue-400 font-bold text-xs ml-2 sm:ml-4">Follow</button>
          </div>
        ))}
      </div>
      {/* Footer Instagram */}
      <div className="mt-8 text-xs text-gray-400 flex flex-col gap-1">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <span>About</span>
          <span>Help</span>
          <span>Press</span>
          <span>API</span>
          <span>Jobs</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Language</span>
          <span>Meta Verified</span>
        </div>
        <div className="mt-2">© 2025 Instagram from Meta</div>
      </div>
    </div>
  );
};

export default Suggestions;
