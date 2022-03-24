import React from "react";
import useStyles from "./error-boundary.style";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div>
          <div
            style={{ backgroundImage: "url(https://i.imgur.com/A040Lxr.png)" }}
          ></div>
          <h2>Sorry this page is lost in space</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
