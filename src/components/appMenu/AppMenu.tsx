import * as React from "react";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router";
import { Icon, Menu } from "antd";
import { connect } from "react-redux";
import { navigatorPush } from "../../common/navigator";
import { ReducerKey } from "../../enums/reducerKey";
import { State, Tab } from "../../store/reducer";
import { NavBarItem } from "../../interfaces/navBar";
import styles from "./styles.scss";
import { navBarMenus } from "./menus";
import { ObjectUtils } from "ts-commons";

export interface StateToProps {}
export interface DispatchToProps {}

const mapStateToProps = (state: { [ReducerKey.App]: State }): StateToProps => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {};
};

export interface PageProps
  extends RouteComponentProps<{}>,
    StateToProps,
    DispatchToProps {}
export interface PageState {}

export interface DefaultMenu {
  defaultSelectedKeys: string[];
  defaultOpenKeys: string[];
}

interface Router {
  path: string;
  key: string;
  label: string;
}

class AppMenu extends React.Component<PageProps, PageState> {
  private menu: DefaultMenu;
  public constructor(props: PageProps) {
    super(props);
    this.state = {};
    this.menu = {
      defaultSelectedKeys: [],
      defaultOpenKeys: []
    };
  }

  public componentWillReceiveProps(
    nextProps: Readonly<PageProps>,
    nextContext: any
  ): void {}

  public render() {
    const menu = this.menu;
    return (
      <div className={styles.wrapper}>
        <Menu
          theme="dark"
          defaultSelectedKeys={menu.defaultSelectedKeys}
          defaultOpenKeys={menu.defaultOpenKeys}
          selectedKeys={this.getSelectedKeys()}
          mode="inline"
        >
          {navBarMenus.map((item: any) => {
            if (!item.children || !item.children.length) {
              return (
                <Menu.Item
                  key={item.key}
                  onClick={() => {
                    const tab: Tab = {
                      path: item.path,
                      key: item.key,
                      title: item.label
                    };
                    navigatorPush(tab);
                  }}
                >
                  <Icon type={item.icon} />
                  <span>{item.label}</span>
                </Menu.Item>
              );
            } else {
              return (
                <Menu.SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.label}</span>
                    </span>
                  }
                >
                  {item.children.map((secondItem: any) => {
                    return (
                      <Menu.Item
                        key={secondItem.key}
                        onClick={() => {
                          const tab: Tab = {
                            path: secondItem.path,
                            key: secondItem.key,
                            title: secondItem.label
                          };
                          navigatorPush(tab);
                        }}
                      >
                        <span>{secondItem.label}</span>
                      </Menu.Item>
                    );
                  })}
                </Menu.SubMenu>
              );
            }
            return null;
          })}
        </Menu>
      </div>
    );
  }

  /**
   * 获取选中的key
   */
  private getSelectedKeys(): string[] {
    // menu组件中的所有router
    const routers = this.getRouters(navBarMenus);
    const currentPathname = this.props.location.pathname;
    const currentRouter = routers.find((router: Router) => {
      const reg: RegExp = new RegExp(`^${router.path}`);
      return reg.test(currentPathname);
    });
    return ObjectUtils.hasValue(currentRouter)
      ? [currentRouter.key]
      : this.menu.defaultSelectedKeys;
  }

  /**
   * 获取menu中所有路由
   * @param itemsList
   */
  private getRouters(itemsList: NavBarItem[]): Router[] {
    let routers: Router[] = [];
    itemsList.forEach((item: NavBarItem) => {
      if (ObjectUtils.hasValue(item.path)) {
        routers.push({
          path: item.path,
          key: item.key,
          label: item.label
        });
      }
      if (Array.isArray(item.children)) {
        const tempRouters = this.getRouters(item.children);
        if (tempRouters.length >= 1) {
          routers = [...routers, ...tempRouters];
        }
      }
    });
    return routers;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppMenu));
