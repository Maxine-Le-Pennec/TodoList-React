import React from "react";

const Input = ({ input, setInput }) => {
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default Input;
