// mostly code from the docs - https://reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  // called when error is caught in children components
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary got an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing link.{" "}
          <Link to="/">Click here</Link> to go back to the home page or wait 5
          seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
