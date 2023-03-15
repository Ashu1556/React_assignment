import React from "react";
import "./fotter.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TwitterIcon from "@mui/icons-material/Twitter";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const Fotter = () => {
  return (
    <div>
      <div className="fotter_container">
        <img
          style={{ width: "100%" }}
          src="https://wallpaperboat.com/wp-content/uploads/2020/02/table-10-920x518.jpg"
          alt="business logo"
        />
        <div
          style={{
            position: "absolute",
            marginTop: "-40em",
            marginLeft: "2em",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "5em",
              color: "black",
            }}
          >
            <EmojiEventsIcon
              sx={{ color: "white" }}
              style={{ width: "250px", height: "250px" }}
            />
            <p>22</p>
            <p>Award Wining</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "10em",
              color: "black",
            }}
          >
            <HomeRepairServiceIcon
              sx={{ color: "white" }}
              style={{ width: "250px", height: "250px" }}
            />
            <p>145</p>
            <p>Finished Project</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "10em",
              color: "black",
            }}
          >
            <DirectionsCarIcon
              sx={{ color: "white" }}
              style={{ width: "250px", height: "250px" }}
            />
            <p>350</p>
            <p>Product Sold</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",

              color: "black",
            }}
          >
            <TwitterIcon
              sx={{ color: "white" }}
              style={{ width: "250px", height: "250px" }}
            />
            <p>22</p>
            <p>Twitter Fans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
