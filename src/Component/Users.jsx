import React, { useState, useEffect, useRef, Fragment } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../ProductService";
import Data from "../CustomerService.json";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import "../index.css";
import axios from "axios";
import { Modul } from "./Delete";
import Edit from "./Edit";

export const DataTableTemplatingDemo = () => {
  const [products, setProducts] = useState([]);
  const [displayMaximizable, setDisplayMaximizable] = useState(false);
  const [tabledelete, setTabledelete] = useState(false)
  const [whereId, setWhereId] = useState([])
  const menu = useRef(null);
  const data = [
      {id:1, name: "Bahaa", email: "bahaa@newsoft.ps", status: "negotiation",active:true },
      {id:2, name: "Ahmad", email: "Ahmad@newsoft.ps", status: "proposal",active:false },
      {id:3, name: "Khalad", email: "Khalad@newsoft.ps", status: "renewal",active:true },
      {id:4, name: "Muaz", email: "Muaz@newsoft.ps", status: "new",active:false },
    ];
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setProducts(res.data)
        })
    }, [])
    
    const items = [
      {
        label: "Options",
        items: [
          {
            label: "Edit",
            icon: "pi pi-user-edit",
            command: () => {
              setDisplayMaximizable(true)
            },
          },
          {
            label: "Delete",
            icon: "pi pi-times",
            command: () => {
              setTabledelete(true)
            },
          },
          
        ],
      },
    ];
  const statusBodyTemplate = (rowData) => {
    return (
      <span className={`customer-badge status-${rowData.status}`}>
        {rowData.status}
      </span>
    );
  };
  const activeBodyTemplate = (rowData) => {
    return (
<i className={`pi ${rowData.active ?  " true-icon pi-check-circle":"false-icon pi-times-circle"}`}></i>
    );
  };

  const OptionBodyTemplate = (rowData) => {
    return (
      <Fragment>
        <Button
          onClick={(event) => {menu.current.toggle(event);setWhereId(rowData.id)}}
          icon="pi pi-ellipsis-v"
          className="p-button-rounded p-button-secondary p-button-text"
          aria-label="Bookmark"
        />
        <Menu model={items} popup ref={menu} id="popup_menu" />
      </Fragment>
    );
  };


  return (
    <div className="datatable-templating-demo">
       <Edit setDisplayMaximizable={setDisplayMaximizable} displayMaximizable={displayMaximizable} whereId={whereId} data={products}/>
       <Modul setTabledelete={setTabledelete} tabledelete={tabledelete} whereId={whereId} data={products}/>
      <div className="card">
        <DataTable value={products} responsiveLayout="scroll" >
          <Column field="name" header="Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column
            field="status"
            header="Status"
            body={statusBodyTemplate}
          ></Column>
            <Column
            field="active"
            header="Active"
            body={activeBodyTemplate}
          ></Column>
          <Column
            field="Option"
            header="Option"
            body={OptionBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};












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
