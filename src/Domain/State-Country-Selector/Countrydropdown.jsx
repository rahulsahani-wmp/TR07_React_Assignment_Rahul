import React from "react";

function CountryDropdown({ apidata, setSelectedCountry }) {
 

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value); // Update selected Country
  };

  return (
    
    <div className="dropdown-container">
      {console.log("inside",apidata)}
      <label htmlFor="Country-dropdown">Select Country:</label>
      <select id="Country-dropdown" onChange={handleCountryChange}>
        <option value="">-- Select a Country --</option>
        {apidata.map((country) =>(
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default CountryDropdown;
