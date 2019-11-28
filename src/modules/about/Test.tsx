import * as React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReducerKey } from "../../enums/reducerKey";
import { State } from "./store/reducer";
import { updateStateAction } from "./store/actions";

interface StateToProps {
  count: number;
}
interface DispatchToProps {
  updateStateAction: (param: Partial<State>) => void;
}
interface TestState {}

interface TestProps extends StateToProps, DispatchToProps {}

const mapStateToProps = (state: {
  [ReducerKey.About]: State;
}): StateToProps => {
  const appState = state[ReducerKey.About];
  return {
    count: appState.count
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => {
  return {
    updateStateAction: param => dispatch(updateStateAction(param))
  };
};

class Test extends React.Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props);
    this.state = {};
  }
  public render() {
    return (
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          let count = this.props.count;
          count += 1;
          this.props.updateStateAction({
            count
          });
        }}
      >
        <Button type="primary">增加count</Button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);
