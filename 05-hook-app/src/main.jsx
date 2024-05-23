import React from 'react';
import ReactDOM from 'react-dom/client'
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
import { CallbackHook } from './06-memos/CallbackHook.jsx';


import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<FormWCustomHook/>
    <CallbackHook/>
  //</React.StrictMode>,
)
