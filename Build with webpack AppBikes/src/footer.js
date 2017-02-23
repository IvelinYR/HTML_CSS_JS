import React from 'react'

import './footer.css'

const Footer = React.createClass({
    render () {
        return (
            <div className='footer'>
                <hr/>
                <div className="footer-menu">
                    <a className="link" href="">Help</a>
                    <a className="link" href="">Status</a>
                    <a className="link" href="">Blog</a>
                    <a className="link" href="">Careers</a>
                    <a className="link" href="">About</a>
                </div>
                <div className="footer-social">
                    <span>Connect with us:</span>
                    <ul >
                        <li>
                            <a href="http://www.facebook.com">
                               <img src='http://www.womenactionmedia.org/cms/assets/themes/crate/images/social/facebook.png' />
                            </a>
                        </li>
                        <li>
                            <a href="http://www.twitter.com">
                                <img src='http://grfx.cstv.com/schools/wis/graphics/icon_twitter24.jpg' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})

export default Footer