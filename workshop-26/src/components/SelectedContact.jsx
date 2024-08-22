import React, { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`,
          
        );
        const data = await response.json();
        setContact(data);
        console.log(contact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
  return (
    <>
      {contact && (
        <div>
          <h1>{contact.name}</h1>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Home</button>
        </div>
      )}
      ;
    </>
  );
}

export default SelectedContact
