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
import ContactStyled, {
  Btn,
  FormTable,
  Form,
  Input,
  InputPhone,
  Selc,
  Title1,
  Table,
} from "./ContactStyled";
import { TiDelete } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../../helper/ToastNotify";
const ContactPage = () => {
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
      toastSuccessNotify("Contact was updated successfully!");
      setContact({ name: "", phone: "", gender: "n/a" });
    } else {
      if (contact.name && contact.phone && contact.gender) {
        const db = getDatabase(firebase);
        const userRef = ref(db, "contact");
        set(push(userRef), contact);
        toastSuccessNotify("Contact was added successfully!");
        setContact({ name: "", phone: "", gender: "n/a" });
      } else {
        toastErrorNotify("Enter name,phone and select gender ");
      }
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
    toastWarnNotify("Contact was deleted");
  };
  const handleEdit = (id, name, phone, gender) => {
    setContact({ id, name, phone, gender });
  };

  return (
    <ContactStyled>
      <FormTable>
        <div>
          <Title1>ADD CONTACT</Title1>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={contact.name}
            />
            <InputPhone
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={contact.phone}
            />
            <Selc
              name="gender"
              onChange={handleChange}
              defaultValue="n/a"
              value={contact.gender}
            >
              <option selected value="n/a">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Selc>
            <Btn type="submit">{contact.id ? "Update" : "Add"}</Btn>
            {contact.id && (
              <Btn
                type="Button"
                onClick={() => {
                  setContact({ name: "", phone: "", gender: "n/a" });
                }}
              >
                Cancel
              </Btn>
            )}
          </Form>
        </div>

        <div>
          <Title1>CONTACTS</Title1>
          <Table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {contactList.length == 0 ? (
                <td style={{ textAlign: "center" }}>Nothing Found</td>
              ) : (
                contactList.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.gender}</td>
                    <td>
                      <TiDelete
                        onClick={() => deleteContact(contact.id)}
                        style={{ color: "red", fontSize: "25px" }}
                      >
                        Delete
                      </TiDelete>
                    </td>
                    <td>
                      <BiEditAlt
                        style={{ color: "blue", fontSize: "20px" }}
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
                      </BiEditAlt>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </FormTable>
    </ContactStyled>
  );
};
export default ContactPage;
