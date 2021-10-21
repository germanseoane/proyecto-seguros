import React from "react";

const AppToast = ({ title }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "290px",
        zIndex: 210,
        height: 30,
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        opacity: 0.9,
        alignSelf: "center",
        padding: 12,
        bottom: 80,
        fontSize: "15px",
      }}
    >
      {title}
    </div>
  );
};

export default AppToast;
