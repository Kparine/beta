import React, { useContext } from 'react';
import { Container, Col } from 'reactstrap';
import { PatientContext } from '../contexts/patient-context';

const FinePrint = () => {
  const { dataOne, isLoading } = useContext(PatientContext);

  /* DO NOT DISPLAY IF PATIENT INFORMATION IS UNAVAILABLE OR LOADING */
  if (!Object.keys(dataOne).length || isLoading) {
    return null;
  }
  return (
    <Container fluid='lg'>
      <Col className='fineprint-content'>
        a - Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
        vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
        orci, sagittis tempus lacus enim ac dui.
      </Col>
    </Container>
  );
};

export default FinePrint;
