/**
 * @file withItemDetails
 * @version 1.0.0
 * @since 13 July 2019
 * @description Hacker News API fetching details of story
 *
 * @flow
 * @format
 */

import React, { Component } from "react";
import { apiRoute } from "../../app.json";

type Props = {
  itemID: number
}

type State = {
  details: any,
}
export default function withItemDetails(WrappedComponent: any) {
  return class extends Component<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        details: {},
      };
    }

    async componentDidMount() {
      const { itemID } = this.props;
      const details = await fetch(`${apiRoute}/item/${itemID}.json?print=pretty`).then(res => res.json());

      if (details) {
        this.setState({
          details
        });
      }
    }

    render() {
      const { details, } = this.state;
      const { itemID, ...rest } = this.props;
      return (
        <WrappedComponent {...rest} details={details} />
      );
    }
  };
}