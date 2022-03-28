import React, { useEffect, useState } from "react";
// import api from "./services/api";

export default function App() {

  const [ set, setSet ] = useState([])

  useEffect(() =>{
    fetch('http://3.88.110.25:3000')
      .then(response => response.json())
      .then(data => {
        setSet(data);
      })
  },[])


  return (
    <ul>
      {set.map(set => {
        return (
          <li key={set.username}>
            <strong>{set.username}</strong>
          </li>
        )
      })}
    </ul>
  );
}