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

// export const DataTableTemplatingDemo = () => {
//   const [products, setProducts] = useState([]);
//   const [displayMaximizable, setDisplayMaximizable] = useState(false);
//   const [tabledelete, setTabledelete] = useState(false)
//   const [whereId, setWhereId] = useState([])
//   const menu = useRef(null);
//   const data = [
//       {id:1, name: "Bahhaa", email: "bahaa@newsoft.ps", status: "negotiation",active:true },
//       {id:2, name: "Ahmad", email: "Ahmad@newsoft.ps", status: "proposal",active:false },
//       {id:3, name: "Khalad", email: "Khalad@newsoft.ps", status: "renewal",active:true },
//       {id:4, name: "Muaz", email: "Muaz@newsoft.ps", status: "new",active:false },
//     ];
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//             setProducts(res.data)
//         })
//     }, [])

//     const items = [
//       {
//         label: "Options",
//         items: [
//           {
//             label: "Edit",
//             icon: "pi pi-user-edit",
//             command: () => {
//               setDisplayMaximizable(true)
//             },
//           },
//           {
//             label: "Delete",
//             icon: "pi pi-times",
//             command: () => {
//               setTabledelete(true)
//             },
//           },

//         ],
//       },
//     ];
//   const statusBodyTemplate = (rowData) => {
//     return (
//       <span className={`customer-badge status-${rowData.status}`}>
//         {rowData.status}
//       </span>
//     );
//   };
//   const activeBodyTemplate = (rowData) => {
//     return (
// <i className={`pi ${rowData.active ?  " true-icon pi-check-circle":"false-icon pi-times-circle"}`}></i>
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
//         <Menu model={items} popup ref={menu} id="popup_menu" />
//       </Fragment>
//     );
//   };

//   return (
//     <div className="datatable-templating-demo">
//        <Edit setDisplayMaximizable={setDisplayMaximizable} displayMaximizable={displayMaximizable} whereId={whereId} data={products}/>
//        <Modul setTabledelete={setTabledelete} tabledelete={tabledelete} whereId={whereId} data={products}/>
//       <div className="card">
//         <DataTable value={products} responsiveLayout="scroll" >
//           <Column field="name" header="Name"></Column>
//           <Column field="email" header="Email"></Column>
//           <Column
//             field="status"
//             header="Status"
//             body={statusBodyTemplate}
//           ></Column>
//             <Column
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
import React, { useState, useEffect } from "react";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { ProductService } from "./ProductService";
import "./DataViewDemo.css";
import { FollowersModel } from "./FollowersModel";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import "./style.css";
import { SelectButton } from "primereact/selectbutton";
import { Dropdown } from "primereact/dropdown";

export const Users = ({ DataFollowers, setPostsPerPage }) => {
  const [paramIdFollwerst, setParamIdFollwerst] = useState("");
  const [displayPosition, setDisplayPosition] = useState(false);
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [selectedItem, setSelectedItem] = useState(10);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
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
  const template1 = {
    'RowsPerPageDropdown': (options) => {
        const dropdownOptions = [
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 },
            { label: 'All', value: options.totalRecords }
        ];

        return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
    },
};

  const onCustomPage1 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
    setCurrentPage(event.page + 1);
}

  const justifyOptions = [
    { icon: "pi pi-table", label: "Grid", value: "grid" },
    { icon: "pi pi-bars", label: "List", value: "list" },
  ];

  const productService = new ProductService();

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const justifyTemplate = (option) => {
    return <i className={option.icon}></i>;
  };
  const [value, setValue] = useState("");
  const data = products.filter((film) => film.name.includes(value));

  const renderListItem = (data) => {
    return (
      <div className="col-12">
        <div className="product-list-item">
          <img
            src={`${data.img}`}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={data.name}
          />
          <div className="product-list-detail">
            <div className="product-name">
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}{" "}
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </div>
            <br />
            <span
              className={`product-badge status-${
                data.status !== 0 ? "instock" : "outofstock"
              }`}
            >
              <span className="product-category">
                {data.status !== 0 ? "Online" : "Offline"}
              </span>
            </span>
          </div>
          <div className="product-list-action">
            <Button
              icon="pi pi-user"
              label="Go To Profile"
              disabled={data.inventoryStatus === "OUTOFSTOCK"}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const renderGridItem = (data) => {
    return (
      <div className="col-3 md:col-4">
        {products.length !== 0 ? (
          
          <div className="cardFollowers" key={data.id}>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => {
                setParamIdFollwerst(data.id);
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
                {data.name}
              </p>
            </Link>
          </div>
        ) : (
          <p>
            No results for: {value}
            <span style={{ fontSize: 15, fontWeight: "bold" }}>{value}</span>
          </p>
        )}
      </div>
    );
  };
  const Header = () => {
    return (<h1>hello</h1>)
  }
  const itemTemplate = (product, layout) => {
    if (!product) {
      return;
    }

    if (layout === "list") return renderListItem(product);
    else if (layout === "grdid") return renderGridItem(product);
  };

  const renderHeader = (options) => {
    return (
      <div className="grid grid-nogutter">
        <div className="field col-12 md:col-2">
          <div className="p-fluid grid">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search"
                />
              </span>
            </div>
           
        </div>
        <SelectButton
          value={layout}
          itemTemplate={justifyTemplate}
          options={justifyOptions}
          onChange={(e) => setLayout(e.value)}
          optionLabel="label"
          
        />
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="dataview-demo">
      <FollowersModel
        DataFollowers={DataFollowers}
        paramIdFollwerst={paramIdFollwerst}
        setDisplayPosition={setDisplayPosition}
        displayPosition={displayPosition}
      />
      <div className="card">
        <DataView
          value={products.length !== 0 ? data:<Header/>}
          layout={layout}
          header={header}
          itemTemplate={itemTemplate}
          paginator
          // paginatorTemplate={template1}
          first={first2} rows={rows2} onPage={onCustomPage1} 
          
        />

      </div>
    </div>
  );
};
