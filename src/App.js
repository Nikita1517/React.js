
import Toggle from './Component/Toggle';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="page">
      <div>Filter By</div>
      <br />
      <div>
        by Date
        <button className="tog" onClick={() => setShow(true)}>show</button>
        <button className="tog" onClick={() => setShow(false)}>hide</button>
        
      </div>  
      <hr />
      {
        show ? <input className="inp" type="checkbox" value="Descending order" /> : null
      }
      <br />
      {
        show?<input className="inp" type="checkbox" />: null
      }   
      {
        show ? <hr />: null
      } 
      <br />
      <div>
        by Location
        <button className="tog" onClick={() => setShow(true)}>show</button>
        <button className="tog" onClick={() => setShow(false)}>hide</button>
      </div>
      <hr />
      {
        show ? <input placeholder="Enter Location" className="inp" type="text" /> : null
      }
      <div>
        Liked posts<Toggle/>
      </div>
      <hr />
    </div>
  );
}

export default App;

