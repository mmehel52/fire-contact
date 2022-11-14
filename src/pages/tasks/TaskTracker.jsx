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
import TaskStyled, {
  Btn,
  Form,
  Input,
  Title1,
  Table,
  InputDate,
  Task,
  TaskDate,
  Tasks,
  Date,
  Todo,
  Icons,
} from "./TaskStyled";
import { TiDelete } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../../helper/ToastNotify";

const TaskTracker = () => {
  const [contact, setContact] = useState({
    task: "",
    date: "",
    completed: false,
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
      if (contact.task && contact.date) {
        const db = getDatabase(firebase);
        const userRef = ref(db, "tasks");
        set(push(userRef), contact);
        toastSuccessNotify("Task was added successfully!");
        setContact({ task: "", date: "", completed: false });
      } else {
        toastErrorNotify("Enter task and date");
      }
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
    toastWarnNotify("Task was deleted");
  };
  const handleEdit = (id, task, date, completed) => {
    setContact({ id, task, date, completed });
  };
  const handleComplete = (id, task, date, completed) => {
    setContact({ ...contact, completed });
  };

  return (
    <TaskStyled>
      <Title1>TASK TRACKER</Title1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="task"
          placeholder="Add Task"
          onChange={handleChange}
          value={contact.task}
        />
        <InputDate
          type="date"
          name="date"
          placeholder="Add Date"
          onChange={handleChange}
          value={contact.date}
        />

        <Btn type="submit">{contact.id ? "Update Task" : "Add Task"}</Btn>
        {contact.id && (
          <Btn
            type="Button"
            onClick={() => {
              setContact({ task: "", date: "" });
            }}
          >
            Cancel
          </Btn>
        )}
      </Form>

      <Tasks>
        {taskList.map((contact) => (
          <Task key={contact.id}>
            <TaskDate>
              <Todo>{contact.task}</Todo>
              <Date>{contact.date}</Date>
            </TaskDate>

            <Icons>
              <TiDelete
                onClick={() => deleteTask(contact.id)}
                style={{ color: "red", fontSize: "25px" }}
              ></TiDelete>

              <BiEditAlt
                style={{ color: "blue", fontSize: "20px" }}
                onClick={() => {
                  handleEdit(contact.id, contact.task, contact.date);
                }}
              />

              <TiTick
                onClick={() => handleComplete(contact.id)}
                style={{ color: "green", fontSize: "25px" }}
              />
            </Icons>
          </Task>
        ))}
      </Tasks>
    </TaskStyled>
  );
};

export default TaskTracker;
