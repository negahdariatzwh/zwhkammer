import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import "/assets/css/codebase.min.css";
//import "/assets/css/site.css";

import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import Provider from '../context/Provider';
import { ToastContainer } from 'react-toastify';
function App() {

  // const queryParams = new URLSearchParams(window.location.search);
  // let get_upid = queryParams.get("upid");
  // let get_longToken = queryParams.get("token");
  // if (get_upid && get_longToken) {
  //   localStorage.setItem("upid", get_upid);
  //   localStorage.setItem("longTermToken", get_longToken);
  //   window.location.assign('localhost:3000');
  // }
  // if (!localStorage.getItem('token')) {
  //   window.location.assign('https://login.hubgrade-dev.de');
  // }
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
