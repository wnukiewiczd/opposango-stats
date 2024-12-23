import { useState } from "react";

export default function YoutubePanel() {
  // const [count, setCount] = useState(0);

  const youtubeData = {
    channelName: "Nazwa",
    subscribers: 10,
    views: 100,
  };

  return (
    <div className="bg-red-100 border border-red-400 p-4 rounded shadow-md w-full h-full">
      <h2 className="text-xl font-bold text-red-600">YouTube Panel</h2>
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
