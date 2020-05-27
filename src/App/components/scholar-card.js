import React from 'react';
import check from '../assets/checkmark.svg';
import { Col, Row } from 'reactstrap';
import logo from '../assets/icon-scholarship.svg';

const ScholarCard = (props) => {
  const { active, cta } = props.data;

  /* NAVIGATE TO CTA.URL */
  const navigate = () => {
    return (window.location.href = `${cta.url}`);
  };

  /* CONDITIONAL CLASSNAME/STYLE GENERATION */
  const className = !active ? 'active' : null;

  return (
    <Row className={`card-item ${className}`}>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <img className='patient-detail-img' src={logo} alt='hey' width='76' height='76' />
        {active ? null : <img className='patient-detail-checked' src={check} alt='/' />}
      </Col>
      <Col>
        <div>Scholarships</div>
        <div>{active ? 'Scholarship applications are now being accepted for the next academic year.' : 'Recieved a scholarship for the current academic year.'}</div>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        {active ? (
          <button className='btn' onClick={() => navigate()} type='button'>
            Apply Now
          </button>
        ) : null}
      </Col>
    </Row>
  );
};

export default ScholarCard;
