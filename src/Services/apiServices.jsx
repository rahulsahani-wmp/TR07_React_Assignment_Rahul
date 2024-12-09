
import { countrystateClient, postsClient } from "./apiInterceptor";

//fetching country state data
export async function getCountryStateData() {
  try {
    const response = await countrystateClient.get('/countries');

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(error)
    return null; // Return null on error
  }
}

//fetching post data
export async function getpostsData() {
  try {
    const response = await postsClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(error)
    return null; // Return null on error
  }
}
