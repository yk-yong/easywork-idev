/**
 * @file withTopStory
 * @version 1.0.0
 * @since 13 July 2019
 * @description Higher order component to fetch top story
 *
 * @flow
 * @format
 */

import React, { Component } from "react";
import { apiRoute } from "../../app.json";

type Props = {}
type State = {
  topStories: Array<any>,
}

/**
 * Higher order Component for fetchin HackerNews Top Story
 *
 * @param {any} WrappedComponent Component
 *
 * @return {props} topStories
 */
export default function withTopStory(WrappedComponent: any) {
  return class extends Component<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        topStories: [],
      };
    }

    async componentDidMount() {
      const topStories: Array<any> = await fetch(`${apiRoute}/topstories.json?print=pretty`, {
        method: "GET",
      }).then(res => res.json());

      if (topStories) {
        this.setState({
          topStories: [...topStories.splice(0, 50)]
        });
      }
    }

    render() {
      const { topStories } = this.state;
      return (
        <WrappedComponent {...this.props} topStories={topStories} />
      );
    }
  };
}