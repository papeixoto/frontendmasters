import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  constructor(props) {
    super(props);
  }

  // static methods can be called on the class itself, not on instances
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // send to tracker (sentry, etc)
    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundry">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click here</Link> to
            go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
