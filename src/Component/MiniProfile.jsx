import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const MiniProfile = () => {
  const header = (
    <img
      alt="Card"
      src="https://www.w3schools.com/howto/img_avatar.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = <div></div>;
  return (
    <div>
      <Card
        title={<p style={{ textAlign: "center" }}>Bahaa Qadan</p>}
        style={{ width: "25em" }}
        header={header}
      >
        <div className="m-0" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.2em", color: "gray" }}>
            FullStack Developer
          </p>
          <p style={{ fontSize: "1.2em", color: "gray" }}>
            Bay Area, San Francisco, CAr
          </p>
          <br />
          <Button label="interested" className="p-button-raised p-button-help"  style={{margin:4}}/>
          <Button
            label="Contact With Me"
            className="p-button-raised p-button-help p-button-text"
            style={{margin:4}}
          />
        </div>
      </Card>
    </div>
  );
};

export default MiniProfile;
