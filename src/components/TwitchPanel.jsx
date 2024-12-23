import { useState } from "react";

export default function TwitchPanel() {
  // const [count, setCount] = useState(0);

  const youtubeData = {
    channelName: "Nazwa",
    subscribers: 10,
    views: 100,
  };

  return (
    <div className="bg-purple-100 border border-purple-400 p-4 rounded shadow-md w-full h-full">
      <h2 className="text-xl font-bold text-purple-600">YouTube Panel</h2>
      {youtubeData ? (
        <div>
          <p>Channel: {youtubeData.channelName}</p>
          <p>Subscribers: {youtubeData.subscribers}</p>
          <p>Views: {youtubeData.views}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
