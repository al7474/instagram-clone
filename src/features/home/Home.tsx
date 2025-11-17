import React from "react";
import Sidebar from "./Sidebar";
import SearchPanel from "./SearchPanel";
import HomeFeed from "./HomeFeed";
import Explorer from "./Explorer";
import BottomNav from "./BottomNav";

interface HomeProps {
  user: string;
  onLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ user, onLogout }) => {
  // Un solo estado para controlar search panel y sidebar compacto
  const [searchActive, setSearchActive] = React.useState(false);
  const [exploreActive, setExploreActive] = React.useState(false);

  // Estado para controlar si la pantalla es <= 650px
  const [isMobileWidth, setIsMobileWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth <= 650 : false
  );
  React.useEffect(() => {
    const handleResize = () => setIsMobileWidth(window.innerWidth <= 650);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Sidebar width solo para desktop, no reservar espacio en mobile
  const [sidebarWidth, setSidebarWidth] = React.useState(300);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1300 && window.innerWidth > 760) {
        setSidebarWidth(100);
      } else if (window.innerWidth <= 760) {
        setSidebarWidth(0);
      } else {
        setSidebarWidth(300);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  React.useEffect(() => {
    const handleResize = () => {
      setShowSuggestions(window.innerWidth > 1160);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // show bottom horizontal nav when screen width <= 760px
  const [showBottomNav, setShowBottomNav] = React.useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 760 : false
  );
  React.useEffect(() => {
    const handleBottomNav = () => setShowBottomNav(window.innerWidth <= 760);
    handleBottomNav();
    window.addEventListener("resize", handleBottomNav);
    return () => window.removeEventListener("resize", handleBottomNav);
  }, []);
  return (
    <div className={`bg-black text-white min-h-screen flex flex-row ${showBottomNav ? '' : ''}`}>
      {/* Sidebar solo visible si no es mobile */}
      {!showBottomNav && sidebarWidth > 0 && (
        <>
          <div
            className="sticky top-0 h-screen flex-shrink-0"
            style={{ width: sidebarWidth, minWidth: sidebarWidth }}
          >
            <Sidebar
              forceCompact={searchActive}
              onSearchClick={() => setSearchActive((v) => !v)}
              onHomeClick={() => {
                setSearchActive(false);
                setExploreActive(false);
              }}
              onLogout={onLogout}
              onExploreClick={() => {
                setExploreActive(true);
                setSearchActive(false);
              }}
            />
          </div>
          {searchActive && (
            <div className="relative z-50">
              <SearchPanel />
            </div>
          )}
        </>
      )}
      <div className="flex-1 relative min-w-0">
        <main className={`pt-8 px-2 flex justify-center`}>
          {exploreActive ? (
            <Explorer />
          ) : (
            <HomeFeed user={user} showSuggestions={showSuggestions} isMobileWidth={isMobileWidth} />
          )}
        </main>
      </div>
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default Home;