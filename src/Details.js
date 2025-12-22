import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submitted Details</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Details;
