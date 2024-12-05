import axios from 'axios'

export async function getCountryStateData() {
  try {
    const response = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
    
    // Return the result directly from the response data
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Optionally return null or a default value in case of an error
    return null;
  }
}