import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import "/assets/css/codebase.min.css";
//import "/assets/css/site.css";

import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import Provider from '../context/Provider';
import { ToastContainer } from 'react-toastify';

function App() {

  return (

    <Provider>
      <ToastContainer />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
