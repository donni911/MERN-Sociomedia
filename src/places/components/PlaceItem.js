import React from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = ({ place }) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={place.image} alt={place.title} />
        </div>
        <div className="place-item__info">
          <h2>{place.title}</h2>
          <h3>{place.address}</h3>
          <p>{place.description}</p>
        </div>
        <div className="place-item__actions">
          <button>View on map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceList;
