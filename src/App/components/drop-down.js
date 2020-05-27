import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { fetchOnePatient, fetchAllPatients } from '../utils/utils';
import { PatientContext } from '../contexts/patient-context';

const DropDown = () => {
  const { dataAll, setAllPatientData, setPatientData, setLoading, setError } = useContext(PatientContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [patientName, setPatientName] = useState('');

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  /* GET ALL PATIENTS ON INITIAL MOUNT */
  useEffect(() => {
    async function getAllPatients() {
      try {
        setLoading(true);
        const response = await fetchAllPatients();

        /* VALIDATE ERRORS IN THE API RESPONSE */
        if (response.message && response.message === 'Error') {
          setLoading(false);
          return setError(true);
        }
        /* TIMEOUT SET ONLY TO EMPHASIZE LOADING STATE, NOT INTENDED FOR PRODUCTION */
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return setAllPatientData(response.data);
      } catch (err) {
        return setError(true);
      }
    }
    getAllPatients();
  }, [setAllPatientData, setError, setLoading]);

  /* FETCH PATIENT INFO BY ID SELECTED AND UPDATE CONTEXT */
  const patientSelected = async (event) => {
    try {
      setPatientName(event.target.textContent);
      setLoading(true);
      const id = event.target.value;
      const response = await fetchOnePatient(id);

      if (response.message && response.message === 'Error') {
        setLoading(false);
        return setError(true);
      }

      /* TIMEOUT SET ONLY TO EMPHASIZE LOADING STATE, NOT INTENDED FOR PRODUCTION */
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return setPatientData(response);
    } catch (err) {
      return setError(true);
    }
  };

  /* RETURN NULL IF NO PATIENT INFORMATION FETCHED */
  if (!Object.keys(dataAll).length) {
    return null;
  }

  return (
    <Container className='dropdown-content'>
      <Col sm={{ size: 'auto' }}>
        <label className='dropdown-label'>PATIENT</label>
        <div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle id='dropDown' caret>
              {patientName ? patientName : 'Select Patient...'}
            </DropdownToggle>
            <DropdownMenu onClick={(e) => patientSelected(e)}>
              {dataAll.items.map((patient, idx) => {
                return (
                  <DropdownItem className='menu-item' key={idx} value={patient.id}>
                    {patient.firstName.concat(' ', patient.lastName)}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
      </Col>
    </Container>
  );
};

export default DropDown;
