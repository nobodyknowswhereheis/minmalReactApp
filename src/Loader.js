import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {className: (this.props.isLoading == true)? "loading-overlay visible": "loading-overlay hidden"};
      }
    render() {
        return (
            <div className={this.state.className} id="loader">
                <div className="loader"></div>
            </div>
        );
    }
}

export default Loader;