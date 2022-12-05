import { Card } from "primereact/card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FollowersModel } from "./FollowersModel";
import "./style.css";

export const Followers = ({ DataFollowers }) => {
  const [paramIdFollwerst, setParamIdFollwerst] = useState("")
  //   const header = (
  //     <img
  //       alt="Card"
  //       src="images/usercard.png"
  //       onError={(e) =>
  //         (e.target.src =
  //           "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
  //       }
  //     />
  //   );
  const [displayPosition, setDisplayPosition] = useState(false);

  const Header = ({ img }) => {
    return (
      <img
        alt="Card"
        src={img}
        style={{ width: "7em", height: "7em", objectFit: "cover" ,borderRadius:"10px"}}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
    );
  };
  const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  return (
    <div>
      <Card>
        {/* <div class="card">
            <div class="flex flex-row flex-wrap card-container blue-container">
        {Data.map((data) => (
              <div class="flex align-items-center justify-content-center w-10rem h-10rem bg-blue-500 font-bold text-white border-round m-5">
                <Header img={data.img}/>
                1
              </div>
        ))}
        </div>
      </div> */}
        <div className="cardContainer">
          {DataFollowers.map(({ firstName, lastName, img ,userId}) => (
            <div className="cardFollowers" key={userId}>
              <Link style={{textDecoration: "none"}} onClick={() => {setParamIdFollwerst(userId);setDisplayPosition(true)}}>
                <Header img={img} />
                <p
                  style={{
                    color: "#a600ff",
                    fontWeight: "bold",height:0
                  }}
                >
                  {firstName} {lastName}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Card>
      <FollowersModel DataFollowers={DataFollowers} paramIdFollwerst={paramIdFollwerst} setDisplayPosition={setDisplayPosition} displayPosition={displayPosition}/>
    </div>
  );
};
