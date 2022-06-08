import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  {
    title: "The Color Red",
    content: "red",
  },
  {
    title: "The Color Green",
    content: "green",
  },
  {
    title: "A Shade of Blue",
    content: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
