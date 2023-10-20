import React from "react";
import PlaceList from "../components/PlacesList";
import { useParams } from "react-router-dom";

const UserPlace = () => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most beautifyul views in the world",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPlP8vDqVj9wVBSsRLlITX541EOeLiU1GSOfVo=s680-w680-h510",
      address: "20 W 34th St., New York, NY 10001, Сполучені Штати",
      location: {
        lat: 40,
        lng: -73,
      },

      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "One of the most beautifyul views in the world",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPlP8vDqVj9wVBSsRLlITX541EOeLiU1GSOfVo=s680-w680-h510",
      address: "20 W 34th St., New York, NY 10001, Сполучені Штати",

      location: {
        lat: 40,
        lng: -73,
      },

      creator: "u2",
    },
  ];

  const { userId } = useParams();

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlace;
