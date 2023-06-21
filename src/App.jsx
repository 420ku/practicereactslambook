import React, { useState } from "react";

export default function App() { 
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(""); 
  const [contact, setContact] = useState(""); 
  const [color, setColor] = useState(""); 
  const [food, setFood] = useState(""); 
  const [displayName, setDisplayName] = useState(""); 
  const [displayAge, setDisplayAge] = useState(""); 
  const [displayContact, setDisplayContact] = useState(""); 
  const [displayFave, setDisplayFave] = useState(""); 
  const [displayColor, setDisplayColor] = useState(""); 
  const [displayFood, setDisplayFood] = useState("");


function handleChange(event) {
  const { name, value } = event.target;
  name === "name"
      ? setName(value)
      : name === "age"
          ? setAge(value)
          : name === "contact"
              ? setContact(value)
              : name === "color"
                  ? setColor(value)
                  : name === "food"
                      ? setFood(value)
                      : null;
}

function handleSubmit(event) {
  event.preventDefault();
  setDisplayName(`${name}`);
  setDisplayAge(`${age} Years Old`);
  setDisplayContact(`${contact}`);
  setDisplayFave(`Favorites`);
  setDisplayColor(`${color}`);
  setDisplayFood(`${food}`);
}


  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input name="name" onChange={handleChange} type="text" placeholder="" value={name} />
      </label><br />
      <label>Age:
        <input name="age" onChange={handleChange} type="text" placeholder="" value={age} />
      </label><br />
      <label>Contact Number:
        <input name="contact" onChange={handleChange} type="text" placeholder="" value={contact} />
      </label><br />
      <label>Favorite Color:
        <input name="color" onChange={handleChange} type="text" placeholder="" value={color} />
      </label><br />
      <label>Favorite Food:
        <input name="food" onChange={handleChange} type="text" placeholder="" value={food} />
      </label><br /><br />
      <button type="submit">Submit</button>
      <h1>{displayName}</h1>
      <p>{displayAge}</p>
      <p>{displayContact}</p>
      <h1>{displayFave}</h1>
      <p>{displayColor}</p>
      <p>{displayFood}</p>
    </form>
  );
}