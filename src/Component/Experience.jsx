import React, { useRef, useState } from "react";
import { Card } from "primereact/card";
import { TabMenu } from "primereact/tabmenu";
import { Toast } from "primereact/toast";
import { TabView, TabPanel } from "primereact/tabview";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MiniProfile from "./MiniProfile";
import SocialMedia from "./SocialMedia";
import { Followers } from "./Followers";
import { User } from "./Users";
export const Experience = () => {
  const navigate = useNavigate();
  const toast = useRef(null);
  const [paramIdFollwerst, setParamIdFollwerst] = useState("");
  const [activeIndex, setActiveIndex] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = Users.slice(indexOfFirstPost, indexOfLastPost);
  // const DataFollowers = [
  //   {
  //     userId: 1,
  //     firstName: "krish",
  //     lastName: "Lee",
  //     phoneNumber: "123456",
  //     emailAddress: "krish.lee@learningcontainer.com",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
  //     menu: [],
  //     status:0
  //   },
  //   {
  //     userId: 2,
  //     firstName: "racks",
  //     lastName: "jacson",
  //     phoneNumber: "123456",
  //     emailAddress: "racks.jacson@learningcontainer.com",
  //     img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  //     menu: [],
  //     status:0

  //   },
  //   {
  //     userId: 3,
  //     firstName: "denial",
  //     lastName: "roast",
  //     phoneNumber: "33333333",
  //     emailAddress: "denial.roast@learningcontainer.com",
  //     img: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960",
  //     menu: [],
  //     status:0

  //   },
  //   {
  //     userId: 4,
  //     firstName: "devid",
  //     lastName: "neo",
  //     phoneNumber: "222222222",
  //     emailAddress: "devid.neo@learningcontainer.com",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShh3-eBB9rvaPIHYCx8ggPDBB17xfrj-KytA&usqp=CAU",
  //     menu: [],
  //     status:1
  //   },
  //   {
  //     userId: 5,
  //     firstName: "jone",
  //     lastName: "mac",
  //     phoneNumber: "111111111",
  //     emailAddress: "jone.mac@learningcontainer.com",
  //     img: "https://www.indiewire.com/wp-content/uploads/2022/01/AP21190389554952-e1643225561835.jpg",
  //     menu: [],
  //     status:0
  //   },
  // ];
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = Users.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
    { label: "Edit", icon: "pi pi-fw pi-pencil" },
    {
      label: "Documentation",
      icon: "pi pi-fw pi-file",
      command: () => {
        navigate("/social");
      },
    },
    {
      label: "Settings",
      icon: "pi pi-fw pi-cog",
      command: () => {
        navigate("/min");
      },
    },
  ];
  return (
    <div>
      <Toast ref={toast}></Toast>
    
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        {/* <TabPanel header="Profile">
          <MiniProfile />
        </TabPanel>
        <TabPanel header="About">
          <SocialMedia />
        </TabPanel> */}
        {/* <TabPanel header="Followers">
          <Followers DataFollowers={currentPosts} setPostsPerPage={setPostsPerPage} />
        </TabPanel> */}
        <TabPanel header="Test">
          <User />
        </TabPanel>
      </TabView>
      <Outlet />
    </div>
  );
};
