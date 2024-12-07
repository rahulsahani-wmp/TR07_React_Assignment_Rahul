import React, { useEffect, useState } from "react";

function StateDropdown({ apidata, setSelectedState, selectedCountry }) {
  const [statedata, setstatedata] = useState([]); // Use useState for statedata

  // Effect to update states based on selected country
  useEffect(() => {
    if (selectedCountry) {
      setSelectedState(""); //remove previos stored data of selectstate
      const country = apidata.find(
        (country) => country.country === selectedCountry
      );
      setstatedata(country.cities); // Set states or empty array if state not available
    }
  }, [selectedCountry]); // Watch for changes to selectedCountry

  const handlestatechange = (event) => {
    setSelectedState(event.target.value); // Update selected state
  };

  return (
    <div>
    
    <select className="form-select p-4"  aria-label="Default select example" onChange={handlestatechange}>
      <option>Select a State</option>

     {statedata.length>0?(statedata.map((state)=>(
      <option key={state}  value={state}
      >{state}</option>
     ))):( <option value="" disabled>
      No States available
    </option>)}
    </select>
  </div>
  );
}

export default StateDropdown;
