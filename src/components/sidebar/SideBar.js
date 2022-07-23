import React from 'react'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const SideBar = () => (
  <div className={classNames('sidebar is-open')}>
    <div className="sidebar-header">
      <h3>Invoicing System</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={'/'}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={'/invoices'}>
            Invoices
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={'/graph'}>
            Graph
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
)

export default SideBar
