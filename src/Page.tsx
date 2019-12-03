import * as React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import HomeComponent from "./modules/home/Home";
import AboutComponent from "./modules/about/About";
import LoginLoader from "./modules/login/Loader";
import { store } from "./common/store";
import { history } from "./common/history";
import AppMenu from "./components/appMenu";

const { Header, Footer, Sider, Content } = Layout;

class Page extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact={true} component={LoginLoader} />
            <Layout
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
            >
              <Header style={{ background: "#d9d9d9" }}>Header</Header>
              <Layout>
                <Sider width={200} style={{ background: "#fff" }}>
                  <AppMenu />
                </Sider>
                <Content
                  style={{
                    padding: "10px",
                    height: "calc(100% - 40px)",
                    overflow: "auto"
                  }}
                >
                  <Route path="/home" exact={true} component={HomeComponent} />
                  <Route path="/about" component={AboutComponent} />
                </Content>
              </Layout>
              <Footer>Footer</Footer>
            </Layout>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }

  /**
   * 是否登录
   */
  // private isLogin() {
  //   // const state: any = store.getState();
  //   console.log(1212333);
  //   return true;
  // }
}

export default Page;
