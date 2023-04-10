import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [range, setRange] = useState(0);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    onSubmit({ id, title, description, email, range, valid });
    setTitle("");
    setDescription("");
    setEmail("");
    setRange(0);
    setValid(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="range">Range:</label>
        <input
          type="number"
          id="range"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          min={1}
          max={99}
          required
        />
      </div>
      <div>
        <label htmlFor="valid">Valid:</label>
        <input
          type="checkbox"
          id="valid"
          checked={valid}
          onChange={(e) => setValid(e.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
