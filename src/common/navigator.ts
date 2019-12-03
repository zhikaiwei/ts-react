import { addTabAction } from "../store/actions";
import { Tab } from "../store/reducer";
import { history } from "./history";
import { store } from "./store";

/**
 * 改变路由
 * @param tab
 */
export const navigatorPush = (tab: Tab) => {
  store.dispatch(addTabAction(tab));
  history.push(tab.path);
};
