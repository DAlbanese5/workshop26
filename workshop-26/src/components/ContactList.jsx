import { useState } from "react";
import ContactRow from "./ContactRow";
import {useEffect} from 'react'

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  useEffect(()=>{
    async function fetchContacts() {
        try {
          const response = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users", {method:"GET", headers:{"Content-Type": "application/json",},});
          const data = await response.json();
          setContacts(data);
          console.log(contacts);
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts()
},[]);
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th colSpan="3">Contact List</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Phone</td>
//         </tr>
//         {contacts.map((contact) => {
//           return <ContactRow setSelectedContactId = { setSelectedContactId } key={contact.id} contact={contact} />;
//         })}
//       </tbody>
//     </table>
//   );
return (
    <div>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId} // Pass the function
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
