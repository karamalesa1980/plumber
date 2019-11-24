import React, { Component } from 'react'
import styled from 'styled-components'
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import HeaderLink from './Link/HeaderLink';
import HeaderDrop from './HeaderDrop/HeaderDrop';

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

const Header = (props) => {
  return (
    <div className={classes.header}>
        <HeaderLink activeClassName={classes.active} />
        <HeaderDrop />
    </div>
  )
}

export default Header;