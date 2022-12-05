import React from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Login } from "./Login";
import MiniProfile from "./MiniProfile";
import SocialMedia from "./SocialMedia";
import { Experience } from "./Experience";
import { Outlet, useNavigate } from "react-router-dom";
export const Layout = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command:() => {
        navigate('experience',{replace:true})
      }
    },
    {
      label: "Drive",
      icon: "pi pi-fw pi-upload",
    }
  ];
 const item  = [    {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
  }]
  const start = (
    <h3 style={{margin:"10px"}}>CRM</h3>
  );
  const end = (
    <span>
        <Avatar
        style={{display:"inline-block"}}
          className="p-overlay-badge"
          image="https://www.w3schools.com/howto/img_avatar2.png"
          shape="circle"
          size="xlarge"
        />

    </span>

  );

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
        <Outlet/>
      </div>
    </div>
  );
};
