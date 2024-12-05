import { useEffect, useState } from "react";
import axios from "axios"; // Make sure Axios is imported
import CountryDropdown from "./Countrydropdown";
import StateDropdown from "./Statedropdown";

function Country_City_selector() {
  // Country definitions
  const [apidata, setapidata] = useState(null); // Initialize with null
  const [selectedCountry, setSelectedCountry] = useState(""); // For selected Country
  const [selectedState, setSelectedState] = useState(""); // For selected city
  const [displayselection, setdisplayselection] = useState(false);

  // Function to fetch data
  async function getCountryStateData() {
    try {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/states"
      );
      console.log("API Data:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Return null on error
    }
  }

  // Effect to load data on mount
  useEffect(() => {
    getCountryStateData().then((res) => {
      setapidata(res);
    });
  }, []);

  useEffect(() => {
    setdisplayselection(false);
  }, [selectedState, selectedCountry]);

  function handleselection() {
    if (selectedState === "") {
      alert("please select both city and country");
    } //handle submit click issue
    else setdisplayselection(true);
  }
  // Debugging and checking Countrys (this runs after apidata is updated)
  useEffect(() => {
    if (apidata) {
      console.log("apidata updated:", apidata);
    }
  }, [apidata]); // This effect will trigger every time apidata changes

  return (
    <>
      hellooo again
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
      <button onClick={handleselection}>Submit</button>
      {displayselection && <p>hello</p>}
    </>
  );
}

export default Country_City_selector;
