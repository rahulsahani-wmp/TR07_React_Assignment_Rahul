function Postdetails({posttitle,postbody}){

    return(
        
       <div className="card " style={{ width: '100%' }} >
       <div className="card-body">
         <h5 className="card-title fw-bold">{posttitle}</h5>
         
         <p className="card-text">{postbody}</p>
       </div>
     </div>
    )

}
export default Postdetails;