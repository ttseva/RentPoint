import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { profileTabs } from '../../routes/navItems';
import './ProfileLayout.css';

export const ProfileLayout = () => {
  const location = useLocation();
  const currentTab = profileTabs.find(tab => tab.path === location.pathname) || profileTabs[0];

  return (
    <div className="profile-layout">
      <header className="profile-header">
        <h1 className="profile-title">Личный кабинет</h1>
        <nav className="profile-tabs">
          {profileTabs.map(tab => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) => 
                `profile-tab${isActive ? ' profile-tab--active' : ''}`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="profile-content">
        <Outlet />
      </main>
    </div>
  );
}; 