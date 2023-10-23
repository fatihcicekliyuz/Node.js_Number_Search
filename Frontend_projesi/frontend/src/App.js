import "./App.scss";
import React, { useState } from "react";
import axios from "axios";
import tiklalogo from "./image/tikla.png";

function App() {
  const [number, setNumber] = useState("");
  const [isRequest, setisRequest] = useState(false);
  const onChange = (e) => {
    const value = e.target.value;
    setNumber(value);
  };
  const showData = () => {
    if (number?.length < 3) {
      alert("en az 3 karakter girmelisiniz");
      return;
    }
    if (isRequest === true) {
      return;
    }
    setisRequest(true);
    axios
      .get("http://localhost:4000/numberSearch/" + number)
      .then((res) => {
        setVeri(res?.data);
        if (!res?.data) {
          alert("herhangi bir sonuç bulunamadı");
        }
      })
      .finally(() => {
        setisRequest(false);
      });
  };
  const [data, setVeri] = useState("");
  return (
    <div className="App">
      <img src={tiklalogo}/>
      <div className="searchArea">
        <input className="inpt" onChange={onChange}  placeholder="Telefon Numaranı Gir" number="number"  value={number}/>
        <button className="buttn" onClick={()=> {showData(); }}><b>Ara</b></button>
      </div>

      <span className="one">  <b>DeviceUniqueId:</b>{data.deviceUniqueId}</span>
      <span className="two">  <b>Code:</b>{data.code} </span>
      <span className="three"><b>Telefon:</b>{data.phone}</span>
    </div>
  );
}

export default App;
