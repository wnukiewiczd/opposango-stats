import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function YoutubePanel() {
  const [youtubeData, setYoutubeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=UCL6zPrw_3jc8r2dLBbXTBlA&key=AIzaSyCR6dZ_MCK3QNviY-JbIuHie0ose0voOIk"
        );
        const data = response?.data?.items[0];

        const mappedData = {
          channelName: data.snippet.title,
          img: data.snippet.thumbnails.high.url,
          subscriberCount: data.statistics.subscriberCount,
          videoCount: data.statistics.videoCount,
          totalViewCount: data.statistics.viewCount,
        };

        setYoutubeData(mappedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-red-100 p-4 w-full h-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 p-10">
        <FontAwesomeIcon icon={faYoutube} /> Panel YouTube
      </h2>
      {error ? (
        <div>
          <h1 className="font-bold text-xl">Błąd w pobieraniu danych</h1>
          <p className="text-xl">{error}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <img
            src={youtubeData?.img}
            alt="Profile picture"
            className="w-1/2 rounded-xl m-auto"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Nazwa kanału</h2>
            <p className="text-xl">
              {youtubeData?.channelName ?? "Ładowanie..."}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Liczba subskrybcji</h2>
            <p className="text-xl">
              {youtubeData?.subscriberCount ?? "Ładowanie..."}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Łączna liczba wyświetleń</h2>
            <p className="text-xl">
              {youtubeData?.totalViewCount ?? "Ładowanie..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
