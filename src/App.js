import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleFocusingOnSearchInput = this.handleFocusingOnSearchInput.bind(
      this
    );
    this.handleBackClick = this.handleBackClick.bind(this);
    this.HomeSearch = this.HomeSearch.bind(this);
    this.SearchView = this.SearchView.bind(this);
    this.Greeting = this.Greeting.bind(this);

    this.state = {
      attemptingSearch: false
    };
  }

  handleFocusingOnSearchInput() {
    this.setState({
      attemptingSearch: true
    });
  }

  handleBackClick() {
    this.setState({
      attemptingSearch: false
    });
  }

  Greeting(props) {
    const isAttemptingSearch = props.isAttemptingSearch;
    if (isAttemptingSearch) {
      return <this.SearchView />;
    }
    return <this.HomeSearch />;
  }

  HomeSearch() {
    return (
      <React.Fragment>
        <div className="main">
          <h1 className="title">Hello!</h1>
          <p className="text">
            I am trying to find a nice way of stopping the keyboard on iOS from
            pushing all the view up. This problem only happens on iOS. On
            Android, things work as expected.
          </p>
        </div>
        <p className="text">
          The attempting to search is: {this.state.attemptingSearch.toString()}
        </p>
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="focus to expand this block"
            onFocus={this.handleFocusingOnSearchInput}
          />
        </div>
      </React.Fragment>
    );
  }

  SearchView() {
    return (
      <React.Fragment>
        <div className="main">
          <input
            type="text"
            className="search__input"
            placeholder="focus to expand this block"
            onFocus={this.setAttemptingToSearch}
          />
          <button onClick={this.handleBackClick}>back</button>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App">
        <this.Greeting isAttemptingSearch={this.state.attemptingSearch} />
      </div>
    );
  }
}

export default App;
