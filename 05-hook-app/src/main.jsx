import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
//import {HooksApp} from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp.jsx';
//import { CounterWCoustomHook } from './01-useState/CounterWCoustomHook.jsx';
//import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
//import { FormWCustomHook } from './02-useEffect/FormWCustomHook.jsx';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
//import { FocusScreen } from './04-useRef/FocusScreen.jsx';
//import { Layout } from './06-useLayoutEffect/Layout.jsx';
//import { Memorize } from './06-memos/Memorize.jsx';
//import { MemoHook } from './06-memos/MemoHook.jsx';
//import { CallbackHook } from './06-memos/CallbackHook.jsx';
//import { Padre } from './07-tarea-memo/Padre.jsx';
import { MainApp } from './09-useContext/MainApp.jsx';


import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/*<React.StrictMode>*/}
    <MainApp/>
  {/*</React.StrictMode>*/}
  </BrowserRouter>
)
