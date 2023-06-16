import "./App.css";
import Form from "./components/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [activities, setActivity] = useState([
    { name: "swim", isForGoodWeather: true, id: "1234" },
  ]);

  function handleAddActivity(newActivity) {
    console.log(newActivity);
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <div className="App">
      <header></header>
      <Form text="hallo sandeep" onAddActivity={handleAddActivity} />
    </div>
  );
}
