import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("records"));
    if (storedData) {
      setRecords(storedData);
    }
  }, []);

  const handleCreateRecord = (newRecord) => {
    const updatedRecords = [
      ...records,
      { ...newRecord, id: records.length + 1 },
    ];
    localStorage.setItem("records", JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
  };

  const validRecords = records.filter((record) => record.valid);
  const rangeRecords = records.filter(
    (record) => record.range > 29 && record.range < 61
  );

  return (
    <div>
      <h1>Form</h1>
      <Form onSubmit={handleCreateRecord} />
      <h1>Valid Records</h1>
      <Table data={validRecords} />
      <h1>Range Records</h1>
      <Table data={rangeRecords} />
    </div>
  );
};

export default App;
