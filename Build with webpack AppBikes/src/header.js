import React from 'react'

import './header.css'
import './clearfix.css'

const Header = React.createClass({
    render () {
        return (
            <div className='header u-clearfix'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        )
    }
})

export default Header