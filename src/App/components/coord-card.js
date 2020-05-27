import React from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../assets/icon-insurance.svg';

const CoordCard = () => {
  return (
    <Row className='card-item'>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <img src={logo} alt='/logo' width='76' height='76' />
      </Col>
      <Col>
        <div>Insurance Coordination</div>
        <div>Connect with us if you need to confirm coverage, find out about autorizations, or appeal a denial of benefits.</div>
      </Col>
      <Col className='contact-info' sm={{ size: 2 }}>
        <Row className='sub-title'>Call for more information</Row>
        <Row className='phone-title'>1-(844)-PATIENTS</Row>
        <Row className='sub-title'>(1-844-867-5309)</Row>
      </Col>
    </Row>
  );
};

export default CoordCard;
