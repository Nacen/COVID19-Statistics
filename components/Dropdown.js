import React from "react";

const Dropdown = ({ data, label, value, defaultVal, handleChange }) => {
  return (
    <>
      <select className="dropdown-select" value={value} onChange={handleChange}>
        <option className="dropdown-option" key={defaultVal} value={defaultVal}>
          {defaultVal}
        </option>
        {data.map(item => (
          <option
            className="dropdown-option"
            key={item[label]}
            value={item[label]}
          >
            {item[label]}
          </option>
        ))}
      </select>
      <style jsx>{`
        .dropdown-select {
        }
        .dropdown-option {
        }
      `}</style>
    </>
  );
};

export default Dropdown;
