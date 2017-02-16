import React from 'react'
import Header from 'app/header'
import Footer from 'app/footer'

import './container.sass'

const Container = React.createClass({
  render () {
    return (
      <div className='container'>
        <Header />
          <div className="main u-clearfix">
            <section id ="leftPosition" >
              <h1>Section</h1>
              <div>
                <img src="https://coresites-cdn.factorymedia.com/dirtde/wp-content/uploads/2015/02/Dirt-100-Specialized-Demo.jpg" alt=""/>
                <img src="https://coresites-cdn.factorymedia.com/dirt_new/wp-content/uploads/2015/06/orbea-rallon-x-team.jpg" alt=""/>
                <img src="https://coresites-cdn.factorymedia.com/dirt_new/wp-content/uploads/2015/06/lapierre-dh.jpg" alt=""/>
              </div>
            </section>
            <aside id ="rightPosition" >
              <h1>Aside</h1>
              <p><a href="#">Lorem ipsum</a></p>
              <p><a href="#">Lorem ipsum</a></p>
              <p><a href="#">Lorem ipsum</a></p>
              <p><a href="#">Lorem ipsum</a></p>
            </aside>
          </div>
        <Footer />
        <div>
        </div>
      </div>
    )
  }
})

export default Container