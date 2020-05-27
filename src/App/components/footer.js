import React from 'react';
import { Container, Col } from 'reactstrap';

const Footer = () => {
  return (
    <Container className='footer-container'>
      <Col sm='12' md={{ size: 5, offset: 7 }} className='footer-content'>
        <p>&copy; PatientPortal All rights reserved. A019965 </p>
      </Col>
    </Container>
  );
};

export default Footer;
