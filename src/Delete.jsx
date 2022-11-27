import React, { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

export const Modul = ({ setTabledelete, tabledelete, whereId, data }) => {
  const toast = useRef(null);
  
  const accept = () => {
    toast.current.show({
      severity: "success",
      summary: "Confirmed",
      detail: Test.map(data => data.name),
      life: 3000,
    });
  };
  const Test = data.filter((data) => data.id === whereId);
  return (
    <div>
      <Toast ref={toast} />
      {Test.map((data) => (
        <>
          <ConfirmDialog
          key={data.id}
            visible={tabledelete}
            onHide={() => setTabledelete(false)}
            message={<p>Are you sure you want Delete <span style={{fontWeight:"bold",color:"red"}}>({data.name})</span></p>}
            header="Confirmation"
            icon="pi pi-exclamation-triangle"
            accept={accept}
          />
        </>
      ))}
    </div>
  );
};
