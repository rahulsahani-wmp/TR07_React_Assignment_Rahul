function Displayselection({selectedState, selectedCountry}) {
 return (
   <div className="card " style={{ width: '100%' }} >
   <div className="card-body">
     <h6 className="card-title fw-bold">Your Country is : {selectedCountry}</h6>
     
     <h6 className="card-title fw-bold">Your State is : {selectedState}</h6>
   </div>
 </div>)
}

export default Displayselection;