import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface PageProps extends RouteComponentProps {}

interface PageState {
  value: string;
}
class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      value: ""
    };
  }

  public render() {
    return (
      <div>
        <input
          onChange={e => {
            this.setState({
              value: e.target.value
            });
          }}
        />
        <button
          onClick={() => {
            if (this.state.value === "123456") {
              this.props.history.replace({ pathname: "/about" });
            }
          }}
        >
          go
        </button>
      </div>
    );
  }
}

export default withRouter(Page);
