export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElements = form.elements;

    const data = {
      name: formElements.name.value,
      ier: formElements.goodWeather.checked,
    };

    onAddActivity(data);
    form.reset();
    formElements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="goodWeather">Good-weather activity</label>
      <input id="goodWeather" type="checkbox" name="goodWeather" />
      <button type="submit">Submit</button>
    </form>
  );
}
