import React, { createContext, useState } from 'react';
export const PatientContext = createContext({});

const PatientContextProvider = (props) => {
  const [dataAll, setAllPatientData] = useState([]);
  const [dataOne, setPatientData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const PatientDataContext = { dataAll, setAllPatientData, dataOne, setPatientData, isLoading, setLoading, error, setError };

  return <PatientContext.Provider value={PatientDataContext}>{props.children}</PatientContext.Provider>;
};

export default PatientContextProvider;

PatientContextProvider.defaultProps = {
  dataAll: [],
  dataOne: [],
  isLoading: false,
  error: false,
};
