import axios from "axios";
import { useEffect, useState } from "react";
import Postselectordropdown from "./Postselectordropdown";
import Postdetails from "./Postdetailes";
import { getpostsData } from "../../Services/apiServices";
import "./index.css";


function Postselector(){
    const [apidata, setapidata] = useState(null);//store data from api
    const [posttitle,setposttitle]=useState(null);//store title of post
    const [postbody,setpostbody]=useState(null); //store body of post

    
      // Effect to load data 
      useEffect(() => {
        getpostsData().then((res) => {
          setapidata(res);
        });
      }, []);
 
    return(
        <div className=" main_container d-flex flex-column gap-3"><h1>Post Selector</h1>
       { apidata &&<Postselectordropdown apidata={apidata} setposttitle={setposttitle} setpostbody={setpostbody}/>} 
       { apidata&&posttitle&&<Postdetails postbody={postbody} posttitle={posttitle}/>}

</div>)
}

export default Postselector;