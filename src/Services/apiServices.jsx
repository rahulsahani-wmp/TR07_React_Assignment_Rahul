import axios from "axios";

import { country_stateurl, postsurl } from "../Utils/apiUrl";

//fetching country state data
export async function getCountryStateData() {
  try {
    const response = await axios.get(country_stateurl);

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null on error
  }
}

//fetching post data
export async function getpostsData() {
  try {
    const response = await axios.get(postsurl);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null on error
  }
}
