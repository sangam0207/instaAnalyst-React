import React, { useState } from "react";
// Import your CSS file

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="name-form">
        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NameForm;
