/**
 * @file withTitle
 * @version 1.0.0
 * @since 16 July 2019
 * @description HoC for screen title
 *
 * @flow
 * @format
 */

import React, { Component } from "react";

type Props = {}
export default function withTitle(screenTitle: string) {
  return (WrappedComponent: any) => {
    return class extends Component<Props> {
      render() {
        return (
          <WrappedComponent {...this.props} screenTitle={screenTitle} />
        );
      }
    };
  };
}