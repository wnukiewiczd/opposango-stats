import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function TikTokPanel() {
  return (
    <div className="bg-gray-100 p-4 w-full h-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-600 p-10">
        <FontAwesomeIcon icon={faTiktok} /> Panel TikTok
      </h2>
      <p className="text-xl">
        Polityka TikTok nie pozwala na pobranie danych. Wymagana zgoda
        właściciela konta.
      </p>
    </div>
  );
}
