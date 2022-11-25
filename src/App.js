// import { useState, useEffect } from "react";
// import { Login } from "./Login";
// import "./style.css";
// import Cookies from 'js-cookies';
// import decode from 'jwt-decode';

// function App() {
//   const [value2, setValue2] = useState("");
//   const [token, settoken] = useState("");

//   const user = Cookies.getItem("token")

//   useEffect(() =>{
//     if(user)
//     {
//       var decodes = decode(user, {header: true}) 
//       settoken(decodes.typ)
//     }
  
//   })

//   const HandleLogoff = () =>{
//     Cookies.removeItem("token")
//     window.location.reload()
//   }
//   return (
//     // <div className="card">
//     //   <div className="title">Log in</div>
//     //   <div>
        
//     //   </div>
//     //   <div className="contant">
//     //     <label style={{margin: "10px 0px",fontSize: "18px",fontWeight: "bold"}}>User Name</label>
//     //     <input type={"text"} className="inputlogin" />
//     //     <label style={{margin: "10px 0px",fontSize: "18px",fontWeight: "bold"}}>Password</label>
//     //     <input type={"text"} className="inputlogin" />
//     //     <div className="btu">
//     //       <button>Test</button>
//     //     </div>
//     //   </div>
//     // </div>
//     <>
//     { <Login/>}
  
//     </>
//   );
// }

// export default App;
import React, {useRef} from 'react';
import { Toast } from 'primereact/toast';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import Cookies from 'js-cookies';
import decode from 'jwt-decode';
import { Layout } from './Layout';
import Users, { DataTableDemo, DataTableTemplatingDemo } from './Users';
function App() {
  const [value2, setValue2] = useState("");
  const [token, settoken] = useState("");

  const user = Cookies.getItem("token")

  useEffect(() =>{
    if(user)
    {
      var decodes = decode(user, {header: true}) 
      settoken(decodes.typ)
    }
  
  })

  const HandleLogoff = () =>{
    Cookies.removeItem("token")
    window.location.reload()
  }


  return (
    <div className="App">
{/* {token === "JWT" ? <Layout/> : <Login/>} */}
<DataTableTemplatingDemo/>
    </div>
  );
}

export default App;