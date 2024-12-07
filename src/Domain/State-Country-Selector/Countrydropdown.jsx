import React from "react";

function CountryDropdown({ apidata, setSelectedCountry }) {
 

  const handlecountrychange = (event) => {
    setSelectedCountry(event.target.value); // Update selected Country
  };

  return (
  
    <div>
     
    <select className="form-select p-4" aria-label="Default select example" onChange={handlecountrychange}>
      <option >Select a country</option>

     {apidata.map((country)=>(
      <option key={country.country}  value={country.country}
      >{country.country}</option>
     ))}
    </select>
  </div>

  );
}

export default CountryDropdown;
