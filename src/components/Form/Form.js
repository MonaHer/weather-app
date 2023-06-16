export default function Form({onAddActivity}) {
    function handleSubmit (event) {

        event.preventDefault();
        const formData = new FormData(event.target);
        const newActivity = Object.fromEntries(formData);

        onAddActivity(data);
        event.target.reset();
        event.target.elements.name.focus();
  }


    return( 
        <form onSubmit={handleSubmit}>
        <h2>Add New Activity</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name={name}/>
        <label htmlFor="good-weather">Good-weather activity</label>
        <input id="good-weather" type="checkbox" name="good-weather"/>
        <button type="submit">Submit</button>
        </form>
        
        )
    }









    )

}
