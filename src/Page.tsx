import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import HomeComponent from "./modules/home/Home";
import AboutComponent from "./modules/about/About";
import { store } from "./common/store";

class Page extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ul>
            <li>
              <Link to="/">To Home</Link>
            </li>
            <li>
              <Link to="/about">To About</Link>
            </li>
          </ul>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route path="/about" component={AboutComponent}></Route>
        </Router>
        <p className="aps">hahahaahhahhahahaha</p>
      </Provider>
    );
  }
}

export default Page;
