import React, { Component } from 'react'
import styled from 'styled-components'
import classes from './HeaderLink.module.css';
import { Link } from 'react-router-dom';

const Section = styled.section`
  background-color: #030303;
  height: 95px;
  color: #fff;
`

// const Header = styled.h1`
//   color: #fff;
//   font-weight: 700;
//   font-size: 40px;
//   line-height: 52px;
// `

// const Subhead = styled.p`
//   font-size: 18px;
//   font-weight: 500;
// `

// const Button = styled.a`
//   display: inline-block;
//   text-decoration: none;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 0;
//   background: #fff;
//   color: #333 !important;
//   padding: 10px 20px;
//   font-size: 18px;
//   //width: 100%;
//   box-shadow: 0px 0px 0px 3px #473228,
//     -6px 6px #ef5f17,
//     -6px 6px 0px 3px #473228;
//`

const HeaderLink = (props) => {
  return (
    <div className='row'>
      <div className={classes.headerlink}>
        <Link to='/about' activeClassName={classes.active_link}>ABOUT</Link>
      </div>
      <div className={classes.headerlinktop}>
        <Link to='/reviews'>REVIEWS</Link>
      </div>
      <div className={classes.headerlinktop}>
        <Link to='/blog'>BLOG</Link>
      </div>
      <div className={classes.headerlinktop}>
        <Link to='/contact'>CONTACT</Link>
      </div>
      <div className={classes.headerlinktop}>
        <Link to='/specials'>SPECIALS</Link>
      </div>
      
      <div className={classes.phone}>
          +38-050-815-42-17
      </div>
    </div>
      )
    }
    
export default HeaderLink;