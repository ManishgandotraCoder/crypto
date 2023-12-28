import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./src/App"
import { HashRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


const Loader = React.lazy(() => import("./src/components/loader/loader.helper"));

// import {Provider} from 'react-redux'
// import store from './src/redux/store';

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <HashRouter>
        {/* <Provider store={store}>  */}
        <App />
        {/* </Provider>  */}
      </HashRouter>  </Suspense>
  </React.StrictMode>
)