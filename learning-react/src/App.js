import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import PersonsList from './components/PersonsList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import CounterRenderProp from './components/CounterRenderProp';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Learning React</h1>
        <h2 className="error">Good Thing</h2> {/* This is normal styling. If we use this in child component also
        it will have effect . Module styling does not has that issue. */}
        <h2 className={styles.success}>Bad Thing</h2> {/* This is using css modules. Error of overridding the
        styles in the child components is less , since we use named styling using {styles.something}*/}
      </div>
      <div>
        <Greet name="Harman">
          <span>This is being passed as children prop</span>
        </Greet>
        <Welcome name="Navdeep"/>
        <Hello name="harman"/>
        <Message />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting />
        <PersonsList />
        <StyleSheet primary= {true} />
        <Inline />
        <Form />
        <LifecycleA />
        <FragmentDemo />
        <Table />
        <ParentComp />
        <RefsDemo />
        <FocusInput />
        <FRParentInput />
        <PortalDemo />
        <ErrorBoundary>
        <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Superman"/>
        </ErrorBoundary>
        {/* <ErrorBoundary>
        <Hero heroName="Joker"/>
        </ErrorBoundary> */}
        <ClickCounter name="Harman"/>
        <HoverCounter />
        {/* <ClickCounter2 />
        <HoverCounter2 /> */}
        <User render={(isLoggedIn) => isLoggedIn?"Harman":"Guest"}/>
        <CounterRenderProp render={(count,incrementCount) => (<ClickCounter2 count={count} incrementCount={incrementCount}/>)}/>
        <CounterRenderProp render={(count,incrementCount) => (<HoverCounter2 count={count} incrementCount={incrementCount}/>)}/>

      </div>
    </div>
  );
}

export default App;
