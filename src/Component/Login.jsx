import React, { useEffect, useRef, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import Cookies from "js-cookies";
import { Toast } from "primereact/toast";

export const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const myToast = useRef(null);
  const myToast2 = useRef(null);

  const showError = (severityValue, summaryValue, detailValue, lifeValue) => {
    myToast.current.show({
      severity: severityValue,
      summary: summaryValue,
      detail: detailValue,
      life: lifeValue,
    });
  };
  const showSuccess = (severityValue, summaryValue, detailValue, lifeValue) => {
    myToast.current.show({
      severity: severityValue,
      summary: summaryValue,
      detail: detailValue,
      life: lifeValue,
    });
  };
  const loading = (
    <div style={{ width: "100%" }}>
      <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
      <span style={{ margin: "80px" }}>Wait for login</span>
    </div>
  );
  const showSticky = (
    severityValue,
    summaryValue,
    detailValue,
    lifeValue,
    content
  ) => {
    myToast2.current.show({
      severity: severityValue,
      summary: summaryValue,
      detail: detailValue,
      sticky: lifeValue,
      content: content,
    });
  };
  const clear = () => {
    myToast2.current.clear();
  };
  const login = [
    { id: 1, username: "demo", password: "123" },
    { id: 2, username: "demo23", password: "123" },
  ];
  const handelDemo = async () => {
    if (username === "") {
      showSuccess("info", "Info Message", "ادخل الاسم او كلمة المرور", 2000);
    } else if (
      login.find((data) => data.username === username) &&
      login.find((data) => data.password === password)
    ) {
      showSuccess("success", "Success Message", `تم الدخول  `, 2000);
    } else {
      showError("error", "Error Message", "خطاء في  كلمة المرور", 2000);
    }
  };
  const handel = () => {
    showSticky("info", "Info Message", "loading", true, loading);

    axios
      .post("http://192.168.2.5:5001/api/login", {
        username,
        password,
      })
      .then((resp) => {
        clear()
        if (resp) {
          Cookies.setItem("token", resp.data);
          showSuccess("success", "Success Message", "Welcome To CRM", 4000);
        }
      })
      .catch((err) => {
        clear()
        if (err) {
          showError("error", "Error Message", err.message || err.response.data, 4000) ;
        }
      });
  };

  const header = (
    <img
      alt="Card"
      src="https://www.zohowebstatic.com/sites/zweb/images/crm/what-crm-banner-img.svg"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
      />
    </span>
  );
  return (
    <div>
      <Toast ref={myToast} />
      <Toast ref={myToast2} />

      {/* <form onSubmit={(e) => handel(e)}> */}

      <Card
        title="Simple Card"
        style={{
          width: "25rem",
          marginBottom: "2em",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
        }}
        header={header}
      >
        <div className="field">
          <label htmlFor="Email" className="block">
            Email
          </label>
          <InputText
            id="Email"
            aria-describedby="Email-help"
            className={"black"}
            style={{ width: "100%" }}
            placeholder="demo"
            defaultValue={"demo"}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="Email" className="block">
            Password
          </label>
          <InputText
            id="username1"
            aria-describedby="username1-help"
            className="block"
            style={{ width: "100%" }}
            placeholder="123456"
            defaultValue={"123"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          style={{ width: "100%", marginBottom: "2px" }}
          label="Success"
          className=" p-button-warning"
          onClick={() => {
            handel();
          }}
        />
        <Button
          style={{ width: "100%", marginTop: "2px" }}
          label="Demo"
          className=" p-button-help"
          onClick={() => {
            handelDemo();
          }}
        />
      </Card>
      {/* </form> */}
    </div>
  );
};
