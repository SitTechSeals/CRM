import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import "./DataViewDemo.css";
import { ProductService } from './ProductService';
import '../index.css'
export const FollowersModel = ({
  DataFollowers,
  paramIdFollwerst,
  setDisplayPosition,
  displayPosition,
}) => {
  const [position, setPosition] = useState("bottom");
  const [products, setProducts] = useState([]);

  const productService = new ProductService();

  useEffect(() => {
      productService.getProducts().then(data => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const dialogFuncMap = {
    displayPosition: setDisplayPosition,
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  const Test = products.filter(
    (Test) => Test?.id === paramIdFollwerst
  )[0];

  return (
    <div>
      <Dialog
        visible={displayPosition}
        position={position}
        modal
        style={{ width: "55em" }}
        onHide={() => onHide("displayPosition")}

      >
        <div className="col-12">
          <div className="product-list-item">
            <img
              src={`${Test?.img}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={Test?.name}
            />
            <div className="product-list-detail">
              <div className="product-name">{Test?.name.charAt(0).toUpperCase() + Test?.name.slice(1)} {Test?.name.charAt(0).toUpperCase() + Test?.name.slice(1)}</div>
              <br/>
              <span
                className={`product-badge status-${Test?.status !==0 ? "instock":"outofstock"}`}
              >
              <span className="product-category">{Test?.status !==0 ? "Online" : "Offline" }</span>
              </span>
            </div>
            <div className="product-list-action">
              <Button
                icon="pi pi-user"
                label="Go To Profile"
                disabled={Test?.inventoryStatus === "OUTdOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
