import "./index.css";
import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import SamuraiJSApp from "./App";

// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById("root")
//     );
// };


    ReactDOM.render(
                    <SamuraiJSApp/>
        ,document.getElementById("root")
    );


// rerenderEntireTree();
