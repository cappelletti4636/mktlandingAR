import * as React from "react";
import logo from "../logo.svg";

interface IHeaderProp {
  text?: string;
  head: string;
}

interface IStateProp {
  text: string;
}

export class Header extends React.Component<IHeaderProp, IStateProp> {
  public state = {
    text: "por defecto",
  };

  public render() {
    const { text } = this.props;
    const { head } = this.props;
    const textRender = text ? text : this.state.text;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{head}</h1>
        <p onClick={this.handleCLick}>{textRender}</p>
      </header>
    );
  }

  private handleCLick = () => {
    this.setState({ text: "Me actualice!!!!" });
  };
}

export default Header;
