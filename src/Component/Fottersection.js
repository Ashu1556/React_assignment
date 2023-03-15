import React from "react";

const Fottersection = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          backgroundColor: "black",
          width: "100%",
          height: "200px",
          marginTop: "-1em",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            width: "50%",
            height: "100%",
          }}
        >
          <p style={{ color: "white" }}>About Flex Bussiness Pro</p>
          <p style={{ color: "white", marginTop: "1em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            molestias officia quod at iure aliquam a deleniti minima
            consequatur, dolorem necessitatibus! Mollitia corporis adipisci
            laudantium iste,
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            width: "50%",
            height: "100%",
          }}
        >
          <p style={{ color: "white" }}>Recent Post</p>
          <p style={{ color: "white", marginTop: "1em" }}>Fly to London</p>
          <p style={{ color: "white", marginLeft: "1em", fontSize: "10px" }}>
            September 2018
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fottersection;
