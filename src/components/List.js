export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      {isGoodWeather ? (
        <p>Good weather activites:</p>
      ) : (
        <p>Bad weather activites</p>
      )}
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
