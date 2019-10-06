import React from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h1>Oops, something went wrong :(</h1>
          <p>Try refreshing your page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
