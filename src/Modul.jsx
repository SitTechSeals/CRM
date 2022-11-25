import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export const Modul = () => {1

    const [displayPosition, setDisplayPosition] = useState(true);
    const [position, setPosition] = useState('center');
    const dialogFuncMap = {

        'displayPosition': setDisplayPosition,
    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
  return (
    <Dialog
      header="Header"
      visible={displayPosition}
      position={position}
      modal
      style={{ width: "50vw" }}
      footer={renderFooter("displayPosition")}
      onHide={() => onHide("displayPosition")}
      draggable={false}
      resizable={false}
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  );
};
