import React from '../node_modules/react/react'
import Footer  from './footer'
import Header from './header'
import './container.css';
import './clearfix.css'

import product1 from './images/img1.png'
import product2 from './images/img2.png'
import product3 from './images/img3.png'

const Container = React.createClass({
    render (){
    return (
        <div className='container'>
          <Header />
          <div className="main u-clearfix">
            <section id ="leftPosition" >
              <h1>Bike models</h1>
              <div>
                <img src={product1} alt="" />
                <img src={product2} alt="" />
                <img src={product3} alt="" />
              </div>
            </section>
            <aside id ="rightPosition" >
              <h1>Aside</h1>
              <p><a href="#">Bike 1</a></p>
              <p><a href="#">Bike 2</a></p>
              <p><a href="#">Bike 3</a></p>
              <p><a href="#">Bike 4</a></p>
            </aside>
          </div>
          <Footer />
        </div>
    );
  }
})

export default Container
