import React, { Component } from "react";
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super();
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component,
      });
    }
    render() {
      const C = this.state.component;
      return C ? <c {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
