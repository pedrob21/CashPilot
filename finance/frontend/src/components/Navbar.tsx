import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="main-header-navbar">
      <div className="navigation-links">
        {/* Links Principais - Dashboard em primeiro */}
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            isActive ? "nav-item dashboard-item active" : "nav-item dashboard-item"
          }
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/goals" 
          className={({ isActive }) => 
            isActive ? "nav-item dashboard-item active" : "nav-item"
          }
        >
          Goals
        </NavLink>

        <NavLink 
          to="/reports" 
          className={({ isActive }) => 
            isActive ? "nav-item dashboard-item active" : "nav-item"
          }
        >
          Reports
        </NavLink>

        <NavLink 
          to="/transactions" 
          className={({ isActive }) => 
            isActive ? "nav-item dashboard-item active" : "nav-item"
          }
        >
          Transactions
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            isActive ? "nav-item dashboard-item active" : "nav-item"
          }
        >
          Profile
        </NavLink>
      </div>
      
      <div className="logout-section">
        {/* Ação Separada de Logout */}
        <a href="#" className="logout-button">
          Logout
        </a>
      </div>
    </nav>
    );
}

export default Navbar;