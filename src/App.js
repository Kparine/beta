import React from 'react';
import './App.scss';

import Header from './App/components/header';
import DropDown from './App/components/drop-down';
import PatientCards from './App/components/patient-cards';
import FinePrint from './App/components/fine-print';
import Footer from './App/components/footer';

import PatientContextProvider from './App/contexts/patient-context';

const App = () => {
  return (
    <div className='App'>
      <div className='App-content'>
        <PatientContextProvider>
          <Header />
          <DropDown />
          <PatientCards />
          <FinePrint />
        </PatientContextProvider>
        <Footer />
      </div>
    </div>
  );
};

export default App;
