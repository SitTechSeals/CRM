import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Rating } from 'primereact/rating';

export const FollowersModel = ({
  DataFollowers,
  paramIdFollwerst,
  setDisplayPosition,
  displayPosition,
}) => {
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayPosition: setDisplayPosition,
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  const Test = DataFollowers.filter(
    (data) => data.userId === paramIdFollwerst
  )[0];

  return (
    <div>
      <Dialog
    
        visible={displayPosition}
        position={position}
        modal
        style={{ width: "25em" }}
        onHide={() => onHide("displayPosition")}
        draggable={false}
        resizable={false}
      >
        <div className="col-12 md:col-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{Test?.firstName}</span>
                        </div>
                        <span className={`product-badge status`}>Test</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={`${Test?.img}`} width={100} height={100} style={{objectFit:"cover"}} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="test" />
                        <div className="product-name">Test</div>
                        <div className="product-description">Test</div>
                        <Rating value={"Test"} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">$Test</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={"OUTOFSTOCK" === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
      </Dialog>
    </div>
  );
};
