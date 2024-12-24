import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function InstagramPanel() {
  return (
    <div className="bg-orange-100 border border-orange-400 p-4 w-full h-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 p-10">
        <FontAwesomeIcon icon={faInstagram} /> Panel Instagram
      </h2>
      <p className="text-xl">
        Polityka Instagrama nie pozwala na pobranie danych. Wymagana zgoda
        właściciela konta.
      </p>
    </div>
  );
}
