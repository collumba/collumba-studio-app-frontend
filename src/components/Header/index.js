import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <h1>
            <Link to="/">
              Atomic Studio
              </Link>
          </h1>
        </div>
        <div>
          <form>
            <div className="searchForm">
              <input />
              <a href="/">
                <i className="material-icons">search</i>
              </a>
            </div>
          </form>
          <div className="transitionScaleIn">
            <Link to="/dashboard" alt="Dashboard">
              <i className="material-icons">dashboard</i>
              <span className="tooltip">Dashboard</span>
            </Link>
          </div>
          <div className="transitionScaleIn">
            <Link to="/">
              <i className="material-icons">settings</i>
              <span className="tooltip">Settings</span>
            </Link>
          </div>
          <div className="transitionScaleIn">
            <Link to="/">

              <i className="material-icons">more_vert</i>
              <span className="tooltip">Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}