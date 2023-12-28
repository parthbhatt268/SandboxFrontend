import './App.css';
import { Route, Routes } from 'react-router';
import Home from './section/home/Home';
import Sandbox from './section/sandBox/Sandbox';
import Navigation from './section/Navigation/Navigation';
import SandBox3 from './section/SandBox3/SandBox3';
import Sandbox2 from './section/SandBox2/Sandbox2';
import { Provider } from "react-redux";
import store from './Store/Store'
function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route exact path='/' element=<Home /> />
          <Route exact path='/sandbox' element=<Sandbox /> />
          <Route exact path='/sandbox2' element=<Sandbox2 /> />
          <Route exact path='/sandbox3' element=<SandBox3 /> />

        </Routes>
      </Provider>

    </>
  );
}

export default App;
