// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Login from './components/Login/Login';
import Greeting from './components/Greeting/Greeting';
import CreatePost from './components/CreatePost/CreatePost'
import AllPosts from './components/Home/AllPosts'
import PostDetailedView from './components/PostDetailedView/PostDetailedView';
import Signup from './components/Signup/Signup';
import Verify from './components/Verification/Verify';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Greeting} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/verify' component={Verify} />
        <Route exact path='/all-posts' component={AllPosts} />
        <Route exact path='/post-details' component={PostDetailedView} />
        <Route exact path='/create-post' component={CreatePost} />
      </Switch>
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
