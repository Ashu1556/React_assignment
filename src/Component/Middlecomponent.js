import React from "react";
import "./middlecomponent.css";

import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import Person from "@mui/icons-material/Person";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

const Middlecomponent = () => {
  return (
    <div className="Middlecomponent">
      <h1 style={{ textAlign: "center" }}>Our Features</h1>
      <div className="component_container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "0.25",
          }}
        >
          <DesktopWindowsRoundedIcon
            sx={{ color: "white", backgroundColor: "blue" }}
            style={{ width: "250px", height: "250px", borderRadius: "50px" }}
          />
          <h3 style={{ marginTop: "1em" }}>Fully Responsive</h3>
          <p
            style={{
              width: "100%",
              marginTop: "1em",
              textAlign: "center",
              color: "gray",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            molestias officia quod at iure aliquam a deleniti minima
            consequatur, dolorem necessitatibus! Mollitia corporis adipisci
          </p>
          <span style={{ color: "blue" }}>Read More</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "0.25",
          }}
        >
          <Person
            sx={{ color: "white", backgroundColor: "blue" }}
            style={{ width: "250px", height: "250px", borderRadius: "50px" }}
          />
          <h3 style={{ marginTop: "1em" }}>Trust Author</h3>
          <p
            style={{
              width: "100%",
              marginTop: "1em",
              textAlign: "center",
              color: "gray",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            molestias officia quod at iure aliquam a deleniti minima
          </p>
          <span style={{ color: "blue" }}>Read More</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "0.25",
          }}
        >
          <AddToDriveIcon
            sx={{ color: "white", backgroundColor: "blue" }}
            style={{ width: "250px", height: "250px", borderRadius: "50px" }}
          />

          <h3 style={{ marginTop: "1em" }}>Reusable Component</h3>
          <p
            style={{
              width: "100%",
              marginTop: "1em",
              textAlign: "center",
              color: "gray",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            molestias officia quod at iure aliquam a deleniti minima
          </p>
          <span style={{ color: "blue" }}>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default Middlecomponent;
