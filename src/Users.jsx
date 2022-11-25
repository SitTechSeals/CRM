import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';
import Data from './CustomerService.json'
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import './index.css'
import axios from 'axios';
import { Modul } from './Modul';

export const DataTableTemplatingDemo = () => {
    const [products, setProducts] = useState([]);
    const menu = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
           
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                }
            ]
        }
    ];
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => setProducts(res.data))
    }, [])
    const data = [{name:"Bahaa",email:"bahaa@newsoft.ps",status:"new"},{name:"Bahaa",email:"bahaa@newsoft.ps",status:"new"}]
    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }
    const OptionBodyTemplate = (rowData) => {
        return<Button  onClick={(event) => menu.current.toggle(event)} icon="pi pi-ellipsis-v" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" ><Menu model={items} popup ref={menu} id="popup_menu" /></Button>}
    return (
        <div className="datatable-templating-demo">
            <Modul/>
            <div className="card">
                <DataTable value={data} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                    <Column field="Option" header="Option" body={OptionBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
}
