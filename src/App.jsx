import "./App.css";

import YoutubePanel from "./components/YoutubePanel";
import TikTokPanel from "./components/TikTokPanel";
import TwitchPanel from "./components/TwitchPanel";
import InstagramPanel from "./components/InstagramPanel";

function App() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <YoutubePanel />
      <TwitchPanel />
      <TikTokPanel />
      <InstagramPanel />
    </div>
  );
}

export default App;
