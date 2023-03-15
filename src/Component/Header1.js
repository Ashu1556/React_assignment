import React from "react";

import "./header1.css";

const Header1 = () => {
  return (
    <div className="headercontainer">
      <img
        className="headercontainer1"
        src="https://wallpapercave.com/wp/wp9486397.jpg"
        alt="bussiness_image"
      />
      <div className="headercontainer11">
        <h2>Your Awespme Bussiness Theme</h2>
        <p style={{ width: "50%", marginTop: "1em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          molestias officia quod at iure aliquam a deleniti minima consequatur,
          dolorem necessitatibus! Mollitia corporis adipisci laudantium iste, a
          facere praesentium iure esse perferendis voluptates saepe distinctio
          ullam exercitationem cupiditate dolor pariatur porro! Doloribus
          voluptatibus repellendus possimus deserunt consequatur, harum
          explicabo. Ut.
        </p>
        <button style={{ marginTop: "1em" }}>Read More</button>
      </div>
    </div>
  );
};

export default Header1;
