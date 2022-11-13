import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import {
  getDatabase,
  onValue,
  push,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

const TaskTracker = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    task: "",
    date: "",
  });
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      const db = getDatabase(firebase);
      const userRef = ref(db, "tasks/" + contact.id);
      update(userRef, {
        task: contact.task,
        date: contact.date,
      });
      setContact({ task: "", date: "" });
    } else {
      const db = getDatabase(firebase);
      const userRef = ref(db, "tasks");
      set(push(userRef), contact);
      setContact({ task: "", date: "" });
    }
  };

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "tasks");
    onValue(query(userRef), (snapshot) => {
      const tasks = snapshot.val();
      const taskArray = [];
      for (let id in tasks) {
        console.log(tasks[id]);
        taskArray.push({ id, ...tasks[id] });
      }
      setTaskList(taskArray);
    });
  }, []);

  const deleteTask = (id) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "tasks/" + id);
    remove(userRef);
  };
  const handleEdit = (id, task, date) => {
    setContact({ id, task, date });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add Task"
          onChange={handleChange}
          value={contact.task}
        />
        <input
          type="text"
          name="date"
          placeholder="Add Date"
          onChange={handleChange}
          value={contact.date}
        />

        <button type="submit">{contact.id ? "Update" : "Add"}</button>
        {contact.id && (
          <button
            type="button"
            onClick={() => {
              setContact({ task: "", date: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.task}</td>
              <td>{contact.date}</td>
              <td>
                <button onClick={() => deleteTask(contact.id)}>Delete</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(contact.id, contact.task, contact.date);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default TaskTracker;
