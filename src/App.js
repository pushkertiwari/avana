/*
 * @file: App.js
 * @description: App.js to render the app
 * @date: 20.06.2019
 * @author: Pushker Tiwari
 * */

import React, { Component } from "react";
import { Provider } from "react-redux";
import SafeAreaView from "./components/common/SafeView";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);
console.disableYellowBox = true;
import store from "../store";
import Nagivations from "./routes/Navigations";
console.reportErrorsAsExceptions = false;

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <SafeAreaView color={"#F1BDBD"}>
            <Nagivations />
          </SafeAreaView>
        </Provider>
      </React.Fragment>
    );
  }
}
