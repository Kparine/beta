import React from 'react';
import check from '../assets/checkmark.svg';
import { Col, Row } from 'reactstrap';
import logo from '../assets/icon-wallet.svg';

const CopayCard = (props) => {
  const { active, cta } = props.data;

  /* NAVIGATE TO CTA.URL */
  const navigate = () => {
    return (window.location.href = `${cta.url}`);
  };

  /* CONDITIONAL CLASSNAME/STYLE GENERATION */
  const className = active ? 'active' : null;

  return (
    <Row className={`card-item ${className}`}>
      <Col className='test' sm={{ size: 'auto', offset: 1 }}>
        <img className='patient-detail-img' src={logo} alt='hey' width='76' height='76' />
        {active ? <img className='patient-detail-checked' src={check} alt='/' /> : null}
      </Col>
      <Col>
        <div>
          Help Pay for Treatment<sup>a</sup>
        </div>
        <div> {active ? 'Currently Enrolled in Copay Assistance.' : 'Elgible for Copay Assistance.'}</div>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <button className='btn' onClick={() => navigate()}>
          {active ? 'View Card' : 'Apply Now'}
        </button>
      </Col>
    </Row>
  );
};

export default CopayCard;
