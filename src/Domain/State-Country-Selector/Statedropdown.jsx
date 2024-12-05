import React, { useEffect, useState } from "react";

function StateDropdown({ apidata, setSelectedState, selectedCountry }) {
  const [statedata, setstatedata] = useState([]); // Use useState for statedata

  // Effect to update states based on selected country
  useEffect(() => {
    if (selectedCountry) {
      setSelectedState(""); //remove previos stored data of selectstate
      const country = apidata.find(
        (country) => country.name === selectedCountry
      );
      setstatedata(country.states); // Set states or empty array
    }
  }, [selectedCountry]); // Watch for changes to selectedCountry

  const handleStateChange = (event) => {
    setSelectedState(event.target.value); // Update selected state
  };

  return (
    <div className="dropdown-container">
      {console.log("selectedCountry:", selectedCountry)}
      {console.log(statedata)}
      <label htmlFor="state-dropdown">Select State:</label>
      <select id="state-dropdown" onChange={handleStateChange}>
        <option value="">-- Select a State --</option>
        {statedata.map((state, index) => (
          <option key={index} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StateDropdown;
