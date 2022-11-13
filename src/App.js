import "./App.css";
import React, { useEffect, useState } from "react";
import firebase from "./firebase";
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

function App() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    gender: "",
  });
  const [contactList, setContactList] = useState([]);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      const db = getDatabase(firebase);
      const userRef = ref(db, "contact/" + contact.id);
      update(userRef, {
        name: contact.name,
        phone: contact.phone,
        gender: contact.gender,
      });
      setContact({ name: "", phone: "", gender: "n/a" });
    } else {
      const db = getDatabase(firebase);
      const userRef = ref(db, "contact");
      set(push(userRef), contact);
      setContact({ name: "", phone: "", gender: "n/a" });
    }
  };

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "contact");
    onValue(query(userRef), (snapshot) => {
      const contacts = snapshot.val();
      const contactArray = [];
      for (let id in contacts) {
        console.log(contacts[id]);
        contactArray.push({ id, ...contacts[id] });
      }
      setContactList(contactArray);
    });
  }, []);

  const deleteContact = (id) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "contact/" + id);
    remove(userRef);
  };
  const handleEdit = (id, name, phone, gender) => {
    setContact({ id, name, phone, gender });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={contact.name}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={contact.phone}
        />
        <select
          name="gender"
          onChange={handleChange}
          defaultValue="n/a"
          value={contact.gender}
        >
          <option disabled value="n/a">
            Gender
          </option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="o">Other</option>
        </select>
        <button type="submit">{contact.id ? "Update" : "Add"}</button>
        {contact.id && (
          <button
            type="button"
            onClick={() => {
              setContact({ name: "", phone: "", gender: "n/a" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.gender}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(
                      contact.id,
                      contact.name,
                      contact.phone,
                      contact.gender
                    );
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
