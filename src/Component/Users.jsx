// import React, { useState, useEffect, useRef, Fragment } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { ProductService } from "../ProductService";
// import Data from "../CustomerService.json";
// import { Button } from "primereact/button";
// import { Menu } from "primereact/menu";
// import "../index.css";
// import axios from "axios";
// import { Modul } from "./Delete";
// import Edit from "./Edit";
// import { Toast } from "primereact/toast";
// import { Link } from "react-router-dom";
// import { FollowersModel } from "./FollowersModel";

// export const DataTableTemplatingDemo = () => {
//   const [products, setProducts] = useState([]);
//   const [displayMaximizable, setDisplayMaximizable] = useState(false);
//   const [tabledelete, setTabledelete] = useState(false);
//   const [whereId, setWhereId] = useState([]);
//   const menu = useRef(null);
//   const data = [
//     {
//       id: 1,
//       name: "Bahhaa",
//       email: "bahaa@newsoft.ps",
//       status: "negotiation",
//       active: true,
//     },
//     {
//       id: 2,
//       name: "Ahmad",
//       email: "Ahmad@newsoft.ps",
//       status: "proposal",
//       active: false,
//     },
//     {
//       id: 3,
//       name: "Khalad",
//       email: "Khalad@newsoft.ps",
//       status: "renewal",
//       active: true,
//     },
//     {
//       id: 4,
//       name: "Muaz",
//       email: "Muaz@newsoft.ps",
//       status: "new",
//       active: false,
//     },
//   ];
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   const items = [
//     {
//       label: "Options",
//       items: [
//         {
//           label: "Edit",
//           icon: "pi pi-user-edit",
//           command: () => {
//             setDisplayMaximizable(true);
//           },
//         },
//         {
//           label: "Delete",
//           icon: "pi pi-times",
//           command: () => {
//             setTabledelete(true);
//           },
//         },
//       ],
//     },
//   ];
//   const statusBodyTemplate = (rowData) => {
//     return (
//       <span className={`customer-badge status-${rowData.status}`}>
//         {rowData.status}
//       </span>
//     );
//   };
//   const activeBodyTemplate = (rowData) => {
//     return (
//       <i
//         className={`pi ${
//           rowData.active
//             ? " true-icon pi-check-circle"
//             : "false-icon pi-times-circle"
//         }`}
//       ></i>
//     );
//   };

//   const OptionBodyTemplate = (rowData) => {
//     return (
//       <Fragment>
//         <Button
//           onClick={(event) => {
//             menu.current.toggle(event);
//             setWhereId(rowData.id);
//           }}
//           icon="pi pi-ellipsis-v"
//           className="p-button-rounded p-button-secondary p-button-text"
//           aria-label="Bookmark"
//         />
//         <Menu model={items} popup ref={menu} id="popup_menu" />
//       </Fragment>
//     );
//   };

//   return (
//     <div className="datatable-templating-demo">
//       <Edit
//         setDisplayMaximizable={setDisplayMaximizable}
//         displayMaximizable={displayMaximizable}
//         whereId={whereId}
//         data={products}
//       />
//       <Modul
//         setTabledelete={setTabledelete}
//         tabledelete={tabledelete}
//         whereId={whereId}
//         data={products}
//       />
//       <div className="card">
//         <DataTable value={products} responsiveLayout="scroll">
//           <Column field="name" header="Name"></Column>
//           <Column field="email" header="Email"></Column>
//           <Column
//             field="status"
//             header="Status"
//             body={statusBodyTemplate}
//           ></Column>
//           <Column
//             field="active"
//             header="Active"
//             body={activeBodyTemplate}
//           ></Column>
//           <Column
//             field="Option"
//             header="Option"
//             body={OptionBodyTemplate}
//           ></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect, useRef, Fragment } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { ProductService } from "./ProductService";
// import Data from "./CustomerService.json";
// import { Button } from "primereact/button";
// import { Menu } from "primereact/menu";
// import "./index.css";
// import { OverlayPanel } from 'primereact/overlaypanel';
// import { Modul } from "./Modul";

// export const DataTableTemplatingDemo = () => {
//   const [products, setProducts] = useState([]);
//   const [tabledelete, setTabledelete] = useState(false);
//   const [whereId, setWhereId] = useState([]);
//   const menu = useRef(null);
//   const data = [
//     { id: 1, name: "Bahaa", email: "bahaa@newsoft.ps", status: "new" },
//     { id: 2, name: "Ahmad", email: "Ahmad@newsoft.ps", status: "new" },
//   ];
//   const items = (
//     <React.Fragment>

//     </React.Fragment>
//   );
//   const statusBodyTemplate = (rowData) => {
//     return (
//       <span className={`customer-badge status-${rowData.status}`}>
//         ({rowData.status})
//       </span>
//     );
//   };
//   const OptionBodyTemplate = (rowData) => {
//     return (
//       <Fragment>
//         <Button
//           onClick={(event) => {menu.current.toggle(event);setWhereId(rowData.id)}}
//           icon="pi pi-ellipsis-v"
//           className="p-button-rounded p-button-secondary p-button-text"
//           aria-label="Bookmark"
//         />
//         <OverlayPanel
//           ref={menu}
//           id="overlay_panel"
//           className="overlaypanel-demo"
//         >
//         <Button label="Delete" className="p-button-danger p-button-text" icon="pi pi-trash" onClick={() => {setTabledelete(true)}}/>
//         </OverlayPanel>
//       </Fragment>
//     );
//   };
//   const actionBodyTemplate = (rowData) => {
//     return (
//       <React.Fragment>
//         <Button
//           icon="pi pi-trash"
//           className="p-button-danger p-button-text"
//           onClick={() => {setTabledelete(true)}}
//         />
//       </React.Fragment>
//     );
//   };
//   console.log(whereId);
//   return (
//     <div className="datatable-templating-demo">
//       <Modul setTabledelete={setTabledelete} tabledelete={tabledelete} whereId={whereId} />
//       <div className="card">
//         <DataTable value={data} responsiveLayout="scroll">
//           <Column field="name" header="Name"></Column>
//           <Column field="email" header="Email"></Column>
//           <Column
//             field="status"
//             header="Status"
//             body={statusBodyTemplate}
//           ></Column>
//           <Column
//             body={OptionBodyTemplate}
//             exportable={false}
//             style={{ minWidth: "8rem" }}
//           ></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// };
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { useState } from 'react';
import { useEffect } from 'react';
import { ProductService } from './ProductService';

export const User = () => {
  const [products, setProducts] = useState(null);
  const productService = new ProductService();
  useEffect(() => {
    productService.getProducts().then(data => setProducts(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderListItem = (data) => {
    return (
      
        <div className="col-12">
          {console.log(data)}
            <div className="product-list-item">
                <img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-list-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-list-action">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        </div>
    );
}

const renderGridItem = (data) => {
    return (
        <div className="col-12 md:col-4">
            <div className="product-grid-item card">
                <div className="product-grid-item-top">
                    <div>
                        <i className="pi pi-tag product-category-icon"></i>
                        <span className="product-category">{data.category}</span>
                    </div>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
                <div className="product-grid-item-content">
                <img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                </div>
                <div className="product-grid-item-bottom">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                </div>
            </div>
        </div>
    );
}

const itemTemplate = (product, layout) => {
    if (!product) {
        return;
    }

    if (layout === 'list')
        return renderListItem(product);
    else if (layout === 'grid')
        return renderGridItem(product);
}


  return (
    <div>
      <div className="dataview-demo">
        <div className="card">
          <DataView
            value={products}

            paginator
            rows={9}

          />
        </div>
      </div>
    </div>
  );
};
