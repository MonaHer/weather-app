import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List.js";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivity] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }

  const isGoodWeather = true;
  function handleFilterActivity() {
    setActivity(
      activities.filter(
        //(activity) => activity.isForGoodWeather !== isGoodWeather
        (activity) => activity.isForGoodWeather === isGoodWeather ? 
      )
    );
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} onFilterActivity={handleFilterActivity} />
    </div>
  );
}
