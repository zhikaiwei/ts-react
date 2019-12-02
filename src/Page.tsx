import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import HomeComponent from "./modules/home/Home";
import AboutComponent from "./modules/about/About";
import LoginLoader from "./modules/login/Loader";
import { store } from "./common/store";
import { history } from "./common/history";

class Page extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {this.isLogin() ? (
            <div>
              <ul>
                <li>
                  <Link to="/">To Home</Link>
                </li>
                <li>
                  <Link to="/about">To About</Link>
                </li>
              </ul>
              <Switch>
                <Route path="/" exact={true} component={HomeComponent} />
                <Route path="/about" component={AboutComponent} />
              </Switch>
              <p className="aps">hahahaahhahhahahaha</p>
            </div>
          ) : (
            <Switch>
              <Route path="/login" exact={true} component={LoginLoader} />
              <Route component={LoginLoader} />
            </Switch>
          )}
        </ConnectedRouter>
      </Provider>
    );
  }

  /**
   * 是否登录
   */
  private isLogin() {
    // const state: any = store.getState();
    console.log(1212333);
    return true;
  }
}

export default Page;
