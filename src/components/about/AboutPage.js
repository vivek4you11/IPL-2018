import React from 'react';

class AboutPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        count : 0
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }

    increment() {
      this.setState({
        count : this.state.count + 1
      });
    }

    decrement() {
      this.setState({
        count : this.state.count - 1
      });
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux and React-Router and a variety of other helpful libraries.</p>
                <hr />
                <p>Count : {this.state.count}</p>
                <input type="button" value="ADD" onClick={this.increment} className="btn btn-primary" />{ " " }
                <input type="button" value="SUB" onClick={this.decrement} className="btn btn-primary" />
            </div>
        );
    }
}

export default AboutPage;
