import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FollowersModel } from "./FollowersModel";
import "./style.css";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';

export const Followers = ({ DataFollowers,setPostsPerPage }) => {
  const [paramIdFollwerst, setParamIdFollwerst] = useState("");
  const [displayPosition, setDisplayPosition] = useState(false);
  const [value, setValue] = useState("");
  const  items =[
    { label: '10', value: 10 },
    { label: '50', value: 50 },
    { label: '10', value: 100 },
    { label: 'All', value: 1000000000000000 }
]
  const [selectedItem, setSelectedItem] = useState(10);

  const onItemChange = (e) => {
    setSelectedItem(e.value);
    setPostsPerPage(e.value)
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
            "https://www.w3schools.com/howto/img_avatar.png")
        }
      />
    );
  };
  console.log('====================================');
  console.log(DataFollowers);
  console.log('====================================');
  const data = DataFollowers.filter((film) => film.first_name.includes(value));
  console.log('====================================');
  console.log(selectedItem);
  console.log('====================================');
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
          <Dropdown value={selectedItem}  options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>
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
            <p>No results for: <span style={{fontSize:15,fontWeight:"bold"}}>{value}</span></p>
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
