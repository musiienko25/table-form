import React from "react";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Email</th>
          <th>Range</th>
          <th>Valid</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.title}</td>
            <td>{record.description}</td>
            <td>{record.email}</td>
            <td>{record.range}</td>
            <td>{record.valid ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      email: PropTypes.string.isRequired,
      range: PropTypes.number.isRequired,
      valid: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Table;
