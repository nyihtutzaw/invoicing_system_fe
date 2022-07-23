import React from 'react'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../routes'

function SideBar() {
  const location = useLocation()

  return (
    <div className={classNames('sidebar is-open')}>
      <div className="sidebar-header">
        <h3>Invoicing System</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          {routes.map((route, index) => (
            <NavItem
              key={`sidebar-nav-${index}`}
              active={location.pathname === route.path}
            >
              <NavLink tag={Link} to={route.path}>
                {route.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  )
}

export default SideBar
