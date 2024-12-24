import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

export default function TwitchPanel() {
  const [twitchData, setTwitchData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authResponse = await axios.post(
          "https://id.twitch.tv/oauth2/token?client_id=w8h36cau1c4y5iovtf372o9mcc1e61&client_secret=dmat8cc4kn894ycfi4gh4g6dqm0bw5&grant_type=client_credentials"
        );
        const accessToken = authResponse?.data?.access_token;

        const responseUser = await axios.get(
          "https://api.twitch.tv/helix/users?login=opposango",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Client-Id": "w8h36cau1c4y5iovtf372o9mcc1e61",
            },
          }
        );

        const dataUser = responseUser?.data?.data[0];

        const responseFollowers = await axios.get(
          "https://api.twitch.tv/helix/channels/followers?broadcaster_id=125990443&first=1",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Client-Id": "w8h36cau1c4y5iovtf372o9mcc1e61",
            },
          }
        );

        const followerCount = responseFollowers?.data?.total;

        const responseStream = await axios.get(
          "https://api.twitch.tv/helix/streams?user_id=125990443",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Client-Id": "w8h36cau1c4y5iovtf372o9mcc1e61",
            },
          }
        );

        const isStreaming = responseStream?.data?.data.length >= 1;
        const streamData = isStreaming ? responseStream?.data?.data[0] : {};

        const mappedData = {
          channelName: dataUser.display_name,
          img: dataUser.profile_image_url,
          followerCount,
          isStreaming: isStreaming,
          gameName: isStreaming ? streamData.game_name : "",
          viewerCount: isStreaming ? streamData.viewer_count : 0,
        };

        setTwitchData(mappedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-purple-100 border border-purple-400 p-4 w-full h-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-600 p-10">
        <FontAwesomeIcon icon={faTwitch} /> Panel Twitch
      </h2>
      {error ? (
        <div>
          <h1 className="font-bold text-xl">Błąd w pobieraniu danych</h1>
          <p className="text-xl">{error}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <img
            src={twitchData?.img}
            alt="Profile picture"
            className="w-1/2 rounded-xl m-auto"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Nazwa kanału</h2>
            <p className="text-xl">
              {twitchData?.channelName ?? "Ładowanie..."}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Liczba obserwujących</h2>
            <p className="text-xl">
              {twitchData?.followerCount ?? "Ładowanie..."}
            </p>
          </div>

          {!twitchData?.isStreaming ? (
            <div className="flex flex-col">
              <h2 className="font-bold text-xl">Czy teraz streamuje</h2>
              <p className="text-xl">Nie</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl">Czy teraz streamuje</h2>
                <p className="text-xl">Tak</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl">Nazwa gry</h2>
                <p className="text-xl">{twitchData?.gameName}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl">Liczba oglądających</h2>
                <p className="text-xl">{twitchData?.viewerCount}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
