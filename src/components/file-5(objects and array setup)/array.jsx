import { useState } from "react";

function Array() {
  const [data, setData] = useState(["Mubeen", "Aqsa", "Khalid"]);
  const [dataDetails, setDetails] = useState([
    { name: "Mubeen", age: "19" },
    { name: "Faizan", age: "21" },
    { name: "Shaheer", age: "10" },
  ]);
  const [select, setSelect] = useState(0);
  const [values, setValues] = useState('');
  function changer(value) {
    setData((prev)=>{
      const updated = [...prev];
      updated[updated.length-1] = value;
      return updated;
    })
  }

  function changer2(value) {
    setDetails((perv)=>{
      const updated = [...perv];
      updated[select] = {...updated[select], age:value};
      return updated;
    })
  }

  return (
    <>
      <h1>Students:</h1>
      <input
        type="text"
        placeholder="Change Name"
        onChange={(event) => changer(event.target.value)}
      />
      <ul>
        {data.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <hr />
      {/* .... */}

      <h1>Students:</h1>
      <select defaultValue={'1st'} onChange={(e)=>{setSelect(Number(e.target.value)); setValues('')}}>
        <option value={0}>1st</option>
        <option value={1}>2nd</option>
        <option value={2}>3rd</option>
      </select>
      <input
        type="text"
        placeholder="Change Name"
        value={values}
        onChange={(event) => {changer2(event.target.value), setValues(event.target.value);}}
      />
      <ul>
        {dataDetails.map((e, i) => (
          <li key={i}>{e.name}, {e.age}</li>
        ))}
      </ul>
    </>
  );
}

export default Array;
