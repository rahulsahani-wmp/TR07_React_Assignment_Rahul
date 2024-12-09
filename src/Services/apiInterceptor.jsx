import axios from 'axios'
import { country_stateurl, postsurl } from '../Utils/apiUrl';


// -----------------------------------------------interceptor for posts api------------------------
export const postsClient = axios.create({
    baseURL: postsurl
  
  });

  postsClient.interceptors.request.use(
    (config) => {
      console.log('Request Config:', config);
      return config; // Return config
    },
    (error) => {
      // Handle request error
      console.error('Request Error:', error);
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
  postsClient.interceptors.response.use(
    (response) => {
        if(response.status === 200)
      return response; // Return the response
    
    else throw new Error("server error");
    
    },
    (error) => {    
        console.log('unable to fetch data issue in server....',error); 
      return Promise.reject(error);
    }
  );
 
//   ---------------------------interceptor for country state selector api-----------------------------------------
  export const countrystateClient = axios.create({
    baseURL: country_stateurl
  });

  countrystateClient.interceptors.request.use(
    (config) => {
      console.log('Request Config:', config);
      return config; // Return config
    },
    (error) => {
      // Handle request error
      console.error('Request Error:', error);
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
countrystateClient.interceptors.response.use(
    (response) => {
        if(response.status === 200)
      return response; // Return the response
    else throw new Error("server error");
    
    },
    (error) => {    
        console.log('unable to fetch data issue in server....',error); 
      return Promise.reject(error);
    }
  );