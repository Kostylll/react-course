import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
                 <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
                        <NavLink 
                            to="/page1" 
                            style={{ marginRight: '1rem' }} 
                            activeStyle={{ fontWeight: 'bold', color: 'blue' }}
                        >
                            Page1
                        </NavLink>
                        <NavLink 
                            to="/page2" 
                            style={{ marginRight: '1rem' }} 
                            activeStyle={{ fontWeight: 'bold', color: 'blue' }}
                        >
                            Page2
                        </NavLink>
                        <NavLink 
                            to="/page3" 
                            style={{ marginRight: '1rem' }} 
                            activeStyle={{ fontWeight: 'bold', color: 'blue' }}
                        >
                            Page3
                        </NavLink>
                </nav>
        </div>
    )
}

export default NavBar