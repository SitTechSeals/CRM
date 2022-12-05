import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FollowersModel } from "./FollowersModel";
import "./style.css";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";

export const Followers = ({ DataFollowers }) => {
  const [paramIdFollwerst, setParamIdFollwerst] = useState("");
  const [displayPosition, setDisplayPosition] = useState(false);
  const [value, setValue] = useState("");

  const Header = ({ img }) => {
    return (
      <img
        alt="Card"
        src={img}
        style={{
          width: "7em",
          height: "7em",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
    );
  };
  const data = DataFollowers.filter((film) => film.firstName.includes(value));

  return (
    <div>
      <Card>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
          />
        </span>
        <div className="cardContainer">
          {data.map(({ firstName, lastName, img, userId }) => (
            <div className="cardFollowers" key={userId}>
              <Link
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setParamIdFollwerst(userId);
                  setDisplayPosition(true);
                }}
              >
                <Header img={img} />
                <p
                  style={{
                    color: "#a600ff",
                    fontWeight: "bold",
                    height: 0,
                  }}
                >
                  {firstName} {lastName}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Card>
      <FollowersModel
        DataFollowers={DataFollowers}
        paramIdFollwerst={paramIdFollwerst}
        setDisplayPosition={setDisplayPosition}
        displayPosition={displayPosition}
      />
    </div>
  );
};
