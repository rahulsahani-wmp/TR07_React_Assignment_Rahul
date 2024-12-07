import { useEffect, useState } from "react";

import CountryDropdown from "./Countrydropdown";
import StateDropdown from "./Statedropdown";
import Displayselection from "./Displayselection";
import "./index.css";
import { getCountryStateData } from "../../Services/apiServices";


function CountryCityselector() {
 
  const [apidata, setapidata] = useState(null); // load api data 
  const [selectedCountry, setSelectedCountry] = useState(""); // For selected Country
  const [selectedState, setSelectedState] = useState(""); // For selected city
  const [displayselection, setdisplayselection] = useState(false); //for rendering display selection

  // Function to fetch data
 

  // Effect to load data 
  useEffect(() => {
    getCountryStateData().then((res) => {
      // console.log("response",res)
      setapidata(res);
    });
  }, []);

  //use effect to handle display selection
  useEffect(() => {
    setdisplayselection(false);
  }, [selectedState, selectedCountry]);


  function handleselection() {
    if (selectedState === "") {
      alert("Please Select Both State and Country");
    } //handle submit click issue
    else setdisplayselection(true);
  }

  return (
    <>
    <div className=" main_Container d-flex gap-3 flex-column">
      <h1>Country State Selector</h1>
      {apidata && (
        <CountryDropdown
          apidata={apidata}
          setSelectedCountry={setSelectedCountry}
        />
      )}
      {apidata && (
        <StateDropdown
          apidata={apidata}
          setSelectedState={setSelectedState}
          selectedCountry={selectedCountry}
        />
      )}
      <div className="button_container">
      <button type="button" className="btn btn-primary "  onClick={handleselection}>Submit</button>
      </div>
      <div className="card_container">
    {displayselection && (<Displayselection  selectedCountry={selectedCountry} selectedState={selectedState}/>)}
    </div>
    </div>
   
    </>
  );
}

export default CountryCityselector;
