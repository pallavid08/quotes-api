import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListDisplay from './ListDisplay';

export default function App() {
   const [details, setDetails] = useState([]);

   useEffect(() => {
      axios
         .get(`https://type.fit/api/quotes`)
         .then((response) => {
            console.log(response.data);
            setDetails(response.data.slice(0, 10));
         })
         .catch((error) => console.log(error));
   }, []);

   return (
      <div className="App">
         <h1>Hello CodeSandbox</h1>
         <h2>Start editing to see some magic happen!</h2>
         <div className="boxWrapper">
            {details.map((item) => (
               <ListDisplay item1={item.text} item1a={item.author} />
            ))}
         </div>
      </div>
   );
}
