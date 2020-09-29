import React from 'react';
import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventHandler from './components/EventHandler';
// import Parent from './components/Parent';
// import UserList from './components/UserList';
// import Form from './components/Form';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ComponentC from './components/ComponentC';
// import {UserProvider} from './components/userContext';
// import BasicRoute from './components/routes/BasicRoute'

// import MainComponent from './todoComponents/MainComponent';

import MainComponentWithHook from './todoWithHooks/MainComponent';
// import MainComponentWithOutHook from './todoComponents/MainComponent';

function App() {
  return (
    <div className="App">
      {/* <Hero heroName="Superman" />
      <ErrorBoundary >
        <Hero heroName="Joker" />
      </ErrorBoundary> */}


      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <UserProvider value="akshay">
        <ComponentC />
      </UserProvider> */}

      {/* <BasicRoute /> */}

      {/* <MainComponent /> */}


      <MainComponentWithHook />
      {/* <MainComponentWithOutHook /> */}

    </div>
  );
}

export default App;
