import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReducerKey } from "../../enums/reducerKey";
import { injectReducer } from "../../common/store";
import { reducer, State } from "./store/reducer";
import Test from "./test";

injectReducer(ReducerKey.About, reducer);

interface StateToProps {
  count: number;
}

interface DispatchToProps {}
interface AboutProps extends StateToProps, DispatchToProps {}
interface AboutState {}

const mapStateToProps = (state: {
  [ReducerKey.About]: State;
}): StateToProps => {
  const appState = state[ReducerKey.About];
  return {
    count: appState.count
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {};
};

class About extends React.Component<AboutProps, AboutState> {
  public render() {
    return (
      <div>
        count={this.props.count}
        <Test />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
