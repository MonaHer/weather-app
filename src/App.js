import "./App.css";
import Form from "./components/Form.js";
import { uid } from "uid";
import List from "./components/List.js";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

export default function App() {
  const [activities, setActivity] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  function handleAddActivity(newActivity) {
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivity(activities.filter((activity) => activity.id !== id));
  }

  let filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (response.ok) {
          const data = await response.json();
          setWeather(data);
          console.log(data);
          console.log("test");
        } else {
          console.error("Response not okay");
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadWeather();
  }, []);

  if (!weather) {
    return <p>Loading..</p>;
  }

  return (
    <div className="App">
      <h2>
        {weather.condition} {weather.temperature}°C
      </h2>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
