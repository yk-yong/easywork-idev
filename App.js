/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import DemoHook from "./src/demo/DemoHook";
import DemoDefault from "./src/demo/DemoDefault";
import DemoHoC from "./src/demo/DemoHoC";


type Props = {
};
class App extends Component<Props> {
  render() {
    return (
      <DemoHoC />
    );
  }
}

export default App;