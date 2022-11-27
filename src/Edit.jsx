import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Image } from 'primereact/image';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import axios from "axios";

const Edit = ({ displayMaximizable, setDisplayMaximizable, whereId, data }) => {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)

    const [submitted, setSubmitted] = useState(false);
    const [value1, setValue1] = useState(true);
  const options = [
    {name: 'Yes', value: true},
    {name: 'No', value: false},

];
useEffect(() => {
  getData()
}, [])

async function  getData (params)  {
 let result = await fetch("https://jsonplaceholder.typicode.com/users")
    result = await result.json()
    setName(result[0].name)

}
  console.log(name);
  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => setDisplayMaximizable(false)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => setDisplayMaximizable(false)}
          autoFocus
        />
      </div>
    );
  };
  function handel(params) {
    console.warn(name);
  }
  return (
    <div>

        <>
        <button onClick={() => handel}></button>
             <input value={name} onChange={(e) => setName(e.target.value)}/>
       </>

    </div>
  );
};

export default Edit;























            // <Dialog visible={displayMaximizable} style={{ width: '450px' }} header="data Details" modal className="p-fluid" footer={renderFooter}>
            //     {data.image && <img src={`images/data/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.image} className="data-image block m-auto pb-3" />}
            //     <div className="field">
            //         <label htmlFor="name">Name</label>
            //         <InputText id="name"  required autoFocus className={classNames({ 'p-invalid': submitted && !data.name })} />
            //         {submitted && !data.name && <small className="p-error">Name is required.</small>}
            //     </div>
            //     <div className="field">
            //         <label className="mb-3">Category</label>
            //         <div className="formgrid grid">
            //             <div className="field-radiobutton col-6">
            //                 <RadioButton inputId="category1" name="category" value="Accessories"  checked={data.status === 'negotiation'} />
            //                 <label htmlFor="category1" className={`customer-badge status-negotiation`}>negotiation</label>
            //             </div>
            //             <div className="field-radiobutton col-6">
            //                 <RadioButton inputId="category2" name="category" value="Clothing"  checked={data.status === 'new'} />
            //                 <label htmlFor="category2" className={`customer-badge status-new`}>new</label>
            //             </div>
            //             <div className="field-radiobutton col-6">
            //                 <RadioButton inputId="category3" name="category" value="Electronics" checked={data.status === 'renewal'} />
            //                 <label htmlFor="category3" className={`customer-badge status-renewal`}>renewal</label>
            //             </div>
            //             <div className="field-radiobutton col-6">
            //                 <RadioButton inputId="category4" name="category" value="Fitness" checked={data.status === 'proposal'} />
            //                 <label htmlFor="category4" className={`customer-badge status-proposal`}>proposal</label>
            //             </div>
            //         </div>
            //     </div>

            //     <div className="field">
            //     <h5 className="mb-3" style={{textAlign:"center"}}>Active</h5>
            //     <SelectButton value={value1} options={options} optionLabel="name" />

            //     </div>
            // </Dialog>