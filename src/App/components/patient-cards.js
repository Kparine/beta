import React, { useContext } from 'react';
import { Container, Col, Row } from 'reactstrap';
import CoordCard from './coord-card';
import CopayCard from './copay-card';
import ScholarCard from './scholar-card';
import PulseLoader from 'react-spinners/PulseLoader';

import { PatientContext } from '../contexts/patient-context';

const PatientCards = () => {
  const { dataOne, isLoading, error } = useContext(PatientContext);

  /* RENDER ON ERROR STATE */
  if (!Object.keys(dataOne).length && !isLoading && error) {
    return (
      <Container className='card-container empty-state'>
        <Col sm={{ size: 'auto' }}>
          <Row>
            <h4 className='empty-state-title'>OOPS, THERE WAS AN ERROR FETCHING PATIENT DATA...</h4>
          </Row>
        </Col>
      </Container>
    );
  }

  /* RENDER ON EMPTY STATE */
  if (!Object.keys(dataOne).length && !isLoading && !error) {
    return (
      <Container className='card-container empty-state'>
        <Col sm={{ size: 'auto', offset: 3 }}>
          <h4 className='empty-state-title'>Welcome to PatientPortal. Please select a patient...</h4>
        </Col>
      </Container>
    );
  }

  /* RENDER ON LOADING STATE */
  if (isLoading) {
    return (
      <Container className='card-container empty-state'>
        <Col sm={{ size: 'auto', offset: 6 }}>
          <PulseLoader size={15} color={'#021965'} loading={isLoading} />
        </Col>
      </Container>
    );
  }

  /* FILTER PROPS BY RELEVANCE */
  const { copay, scholarship, insuranceCoordination } = dataOne.data;
  return (
    <Container className='card-container'>
      <Col>
        <CopayCard data={copay} />
        <ScholarCard data={scholarship} />
        <CoordCard data={insuranceCoordination} />
      </Col>
    </Container>
  );
};

export default PatientCards;
