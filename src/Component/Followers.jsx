import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { FollowersModel } from "./FollowersModel";
import { ProductService } from "./ProductService";
export const Followers = ({ DataFollowers, setPostsPerPage }) => {
  const [paramIdFollwerst, setParamIdFollwerst] = useState("");
  const [displayPosition, setDisplayPosition] = useState(false);
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const productService = new ProductService();
  useEffect(() => {
    productService.getProducts().then((datauser) => setProducts(datauser));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const items = [
    {
      label: (
        <div>
          <i className="pi pi-user" style={{ fontSize: "1em" }}></i> 10
        </div>
      ),
      value: 10,
    },
    {
      label: (
        <div>
          <i className="pi pi-users" style={{ fontSize: "1em" }}></i> 50
        </div>
      ),
      value: 50,
    },
    { label: "All", value: 1000000000000000 },
  ];
  const [selectedItem, setSelectedItem] = useState(10);

  const onItemChange = (e) => {
    setSelectedItem(e.value);
    setPostsPerPage(e.value);
  };

  console.log("====================================");
  console.log(DataFollowers);
  console.log("====================================");
  const data = products.filter((film) => film.name.includes(value));
  console.log("====================================");
  console.log(selectedItem);
  console.log("====================================");
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
              <Dropdown
                value={selectedItem}
                options={items}
                onChange={onItemChange}
                virtualScrollerOptions={{ itemSize: 38 }}
                placeholder="Select Item"
              />
            </span>
          </div>
        </div>
        <div>
          {data.length !== 0 ? (
            <div className="cardContainer">
              {data.map(({ name, last_name, img, id }) => (
                <div className="cardFollowers" key={id}>
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setParamIdFollwerst(id);
                      setDisplayPosition(true);
                    }}
                  >
                    <img
                      alt={"https://www.w3schools.com/howto/img_avatar.png"}
                      src={`https://www.w3schools.com/howto/img_avatar.png`}
                      style={{
                        height: "7em",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      onError={(e) =>
                        (e.target.src =
                          "https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef--social-networks-avatar.jpg")
                      }
                    />
                    <p
                      style={{
                        color: "#a600ff",
                        fontWeight: "bold",
                        height: 0,
                      }}
                    >
                      {name} {last_name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>
              No results for:{" "}
              <span style={{ fontSize: 15, fontWeight: "bold" }}>{value}</span>
            </p>
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
