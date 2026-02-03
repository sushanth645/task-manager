import { useEffect, useState } from "react";
import api from "./api";

export default function Tasks() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const add = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    load();
  };

  const del = async (id) => {
    await api.delete(`/tasks/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>My Tasks</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={add}>Add</button>

      {tasks.map(t => (
        <div key={t._id}>
          {t.title}
          <button onClick={() => del(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}



