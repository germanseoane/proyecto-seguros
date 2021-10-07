import React from "react";

const BackDrop = ({ active, setActive }) => {
  if (active) {
    return (
      <div
        onClick={() => setActive(!active)}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0, 0.5)",
          zIndex: 100,
          top: 0,
          left: 0,
          position: "fixed",
        }}
      >
        back
      </div>
    );
  } else {
    return null;
  }
};

export default BackDrop;
