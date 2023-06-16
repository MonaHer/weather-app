import "./App.css";
import Form from "./components/Form.js";
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
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}
