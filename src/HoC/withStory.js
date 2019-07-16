/**
 * @file withStory
 * @version 1.0.0
 * @since 16 July 2019
 * @description Fetching hackernews api
 *
 * @flow
 * @format
 */

import React, { Component } from "react";
import { apiRoute } from "../../app.json";

type Props = {}

type State = {
  stories: Array<any>,
}
export default function withStory(route: string, dynamicProps: string) {
  return (WrappedComponent: any) => {
    return class extends Component<Props, State> {
      constructor(props: Props) {
        super(props);

        this.state = {
          stories: [],
        };
      }

      async componentDidMount() {
        const stories = await fetch(`${apiRoute}/${route}.json?print=pretty`, {
          method: "GET"
        }).then(res => res.json());
        if (stories) {
          this.setState({
            stories
          });
        }
      }

      render() {
        const { stories, } = this.state;
        return (
          <WrappedComponent {...this.props} {...{ [dynamicProps]: stories }} />
        );
      }
    };
  };
}