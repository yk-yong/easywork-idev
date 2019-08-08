/**
 * @file NewsItemWithAPI
 * @version 1.0.0
 * @since 26 July 2019
 * @description A component displaying HackerNews with API, the details for particular news/story
 *
 * @flow
 * @format
 */

import React, { Component } from "react";

import { ListItem, Body, Text, Right, Icon } from "native-base";
import { apiRoute } from "../../app.json";

type Props = {
  storyID: number
};
type State = {
  details: any
}
export default class NewsItemWithAPI extends Component<Props, State> {
  constructor(props: Props) {
    super();

    this.state = {
      details: {}
    };
  }

  async componentDidMount() {
    // Fetching details of story from HackerNews API
    try {
      const { storyID } = this.props;
      const res = await fetch(`${apiRoute}/item/${storyID}.json?print=pretty`, { method: "GET" }).then(res => res.json());

      if (res) {
        this.setState({
          details: res
        });
      }
    } catch (error) {
      // handling error
    }
  }

  componentWillUnmount() {
    // code
  }

  render() {
    const { details } = this.state;
    return (
      <ListItem>
        <Body><Text>{details.title}</Text></Body>
        <Right>
          <Icon name="arrow-forward" type="MaterialIcons" />
        </Right>
      </ListItem>
    );
  }
}