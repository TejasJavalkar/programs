import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <>
      <Spinner animation="grow" style={{ width: "120px", height: "120px" }} />
    </>
  );
};

export default Loader;
