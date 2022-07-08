export default function Overview(props) {
  const allTasks = props.tasks.map((e) => (
    <div className="task" key={e.id}>
      <div>
        {e.id}: {e.text}
      </div>
      <button onClick={props.deleteTask}>x</button>
    </div>
  ));

  return <div className="Overview">{allTasks}</div>;
}
