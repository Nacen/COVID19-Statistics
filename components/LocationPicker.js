import React from "react";
import Dropdown from './Dropdown';

const LocationPicker = ({ handleLocationChange, locationData, location }) => {
  return (
    <div className="location-picker">
      <h3 className="location-picker-label">Filter by Location</h3>
      <Dropdown
        handleChange={handleLocationChange}
        data={locationData}
        label="country"
        value={location}
        defaultVal="Worldwide"
      />
      <style jsx>{`
        .location-picker {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default LocationPicker;
