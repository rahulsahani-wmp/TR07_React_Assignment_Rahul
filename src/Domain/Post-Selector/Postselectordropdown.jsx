function Postselectordropdown({ apidata,setposttitle,setpostbody }) {

    function handlechange(event){
        const selectedOption = event.target.selectedOptions[0];
        const title = selectedOption.getAttribute('data-title');
        const body = selectedOption.getAttribute('data-body');

        setpostbody(body);
       
        setposttitle(title);
    }
  return (
    <div>
      <select className="form-select p-4" aria-label="Default select example" onChange={handlechange}>
        <option >Select a post</option>

       {apidata.map((posts)=>(
        <option key={posts.id}  data-title={posts.title}
        data-body={posts.body} >{posts.title}</option>
       ))}
      </select>
    </div>
  );
}

export default Postselectordropdown;
