
import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About'
import Projects from './components/Projects'
import BlogContainer from './containers/BlogContainer'
import Contact from './components/Contact'
import Home from './components/Home'
import BlogPost  from './components/BlogPost';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <BlogContainer />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogPost/:id">
          <BlogPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
