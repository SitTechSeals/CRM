import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FollowersModel } from "./FollowersModel";
import "./style.css";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';

export const Followers = ({ DataFollowers }) => {
  const [paramIdFollwerst, setParamIdFollwerst] = useState("");
  const [displayPosition, setDisplayPosition] = useState(false);
  const [value, setValue] = useState("");
  const sort = [10,20,30]
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemChange = (e) => {
    setSelectedItem(e.value);
}
  const Header = ({ img }) => {
    return (
      <img
        alt={img}
        src={`${img}`}
        style={{
          width: "7em",
          height: "7em",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        onError={(e) =>
          (e.target.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU")
        }
      />
    );
  };
  const data = DataFollowers.filter((film) => film.first_name.includes(value));

  return (
    <div>
      <Card>
      <div className="p-fluid grid">
      <div className="field col-5 md:col-2">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
          />
        </span>
        </div>
        <div className="field col-12 md:col-4">
          <span className="p-float-label">
          <Dropdown value={selectedItem} options={sort} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
          </span>
        </div>
        </div>
        <div>
          {data.length !== 0 ? (
            <div className="cardContainer">
              {data.map(({ first_name, last_name, img, id }) => (
                <div className="cardFollowers" key={id}>
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setParamIdFollwerst(id);
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
                      {first_name} {last_name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            `No results for:${value}`
          )}
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
