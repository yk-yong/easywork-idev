/**
 * @file DemoDefault
 * @version 1.0.0
 * @since 26 July 2019
 * @description Demo fetching HackerNews API without involved HoC or Hooks
 *
 * @flow
 * @format
 */

import React, { Component } from "react";
import { FlatList } from "react-native";

import { apiRoute } from "../../app.json";
import NewsItemWithAPI from "../components/NewsItemWithAPI";

// flow-type
type State = {
  stories: Array<any>
}
export default class DemoDefault extends Component<null, State> {
  constructor() {
    super();

    // initialised state
    this.state = {
      stories: []
    };
  }

  async componentDidMount() {
    // Fetching resources from HackerNews API
    try {
      const res = await fetch(`${apiRoute}/topstories.json?print=pretty`, { method: "GET" }).then(res => res.json());

      if (res) {
        this.setState({
          stories: [...res].splice(0, 50)
        });
      }
    } catch (error) {
      // handling error
    }
  }

  componentWillUnmount() {
    // code
  }

  renderStory = ({ item }: { item: Object }) => {
    return <NewsItemWithAPI storyID={item} />;
  }

  render() {
    const { stories } = this.state;
    return <FlatList data={stories} renderItem={this.renderStory} keyExtractor={(item, index) => `${item}-${index}`} />;
  }
}