import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default function MyNavbar() {


  const btnItems = [
    {
      btnTitle: "ABOUT",
      btnURL: "/about",
    },
    {
      btnTitle: "WORK",
      btnURL: "/work",
    },
    {
      btnTitle: "CONTACT",
      btnURL: "/contact",
    },
  ];

  return (
      <>
      {btnItems.map((btnItem) => {
        const { btnTitle, btnURL } = btnItem;
        return (
          <div className="ml-auto">
            <ul className="root">
              <li className="link-base">
                <a href={btnURL} className="navlink">
                  {btnTitle}
                </a>
              </li>
            </ul>
          </div>
        );
      })}
        </>
  );
}
