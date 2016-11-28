// import { PropTypes } from 'react';
import React from 'react';
import logo from '../img/logo.png';
import '../css/header.css';
import { Grid, Col } from 'react-bootstrap';
import UserInfo from '../containers/UserInfo';

const Header = () => {
        return (
            <div className="Header">
              <Grid>
                  <Col xs={12} md={8}><img src={logo} className="logo" alt="logo" /></Col>
                  <Col xs={6} md={4}><UserInfo /></Col>
              </Grid>
            </div>
        );
};

export default Header;
