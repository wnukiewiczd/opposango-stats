import { useState } from "react";

export default function TikTokPanel() {
  // const [count, setCount] = useState(0);

  const youtubeData = {
    channelName: "Nazwa",
    subscribers: 10,
    views: 100,
  };

  return (
    <div className="bg-gray-100 border border-gray-400 p-4 rounded shadow-md w-full h-full">
      <h2 className="text-xl font-bold text-gray-600">YouTube Panel</h2>
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
