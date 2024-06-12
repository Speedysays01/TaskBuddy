import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Task Buddy
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
