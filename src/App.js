import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModel from './components/logs/AddLogModal';
import EditLogModel from './components/logs/EditLogModel';
import AddTechModel from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';



import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModel />
        <EditLogModel />
        <AddTechModel />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
