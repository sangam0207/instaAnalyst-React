import React, { useState } from "react";
import NameForm from "./components/inputName/NameForm";
import FetchData from "./components/displayUser/fetchData.jsx";

const App = () => {
  const [name, setName] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (name) => {
    setName(name);
    setShowData(true);
  };

  return (
    <div>
      <h1 className='head'>Instagram Data Viewer</h1>
      {!showData && <NameForm onSubmit={handleSubmit} />}
      {showData && <FetchData name={name} />}
    </div>
  );
};

export default App;
