import React, { Component } from 'react'

const Jumbotron = () => {
  return (
    <section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h1>React For Rails Developers!</h1>
              <p>Supercharge your Ruby on Rails Apps with React.js</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe id="ytplayer" type="text/html" width="640" height="360"
              src="http://www.youtube.com/embed/aM8jH8pmmO0"
              frameBorder="0"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h1>React For Rails Developers</h1>
              <p>Supercharge your Ruby on Rails Apps with React.js</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe id="ytplayer" type="text/html" width="640" height="360"
              src="http://www.youtube.com/embed/HvZu7IV7dtA"
              frameBorder="0"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron;