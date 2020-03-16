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
        &::-webkit-scrollbar {
          width: $size;
          height: $size;
        }

        &::-webkit-scrollbar-thumb {
          background: #3f3f3f;
        }

        &::-webkit-scrollbar-track {
          background: #e2e2e2;
        }

        .dropdown-select,
        .dropdown-option {
          font-size: 1.2rem;
          color: #e2e2e2;
          padding: 5px;
          background: #3f3f3f;
        }
        .dropdown-option {
          font-size: 1rem;
        }
      `}</style>
    </>
  );
};

export default Dropdown;
