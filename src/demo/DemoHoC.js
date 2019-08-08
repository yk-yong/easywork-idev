/**
 * @file DemoHoC
 * @version 1.0.0
 * @since 26 July 2019
 * @description Let's simplify with Higher Order Component
 *
 * @flow
 * @format
 */

import React from "react";
import { FlatList } from "react-native";

import withTopStory from "../HoC/withTopStory";
import withItemDetails from "../HoC/withItemDetails";
import NewsItem from "../components/NewsItem";

const WrappedNewsItem = withItemDetails((props) => {
  const { itemID, ...rest } = props;
  return <NewsItem itemID={itemID} {...rest} />;
});

type Props = {
  topStories: Array<any>
};
function DemoHoC(props: Props) {
  const { topStories } = props;

  function renderStory({ item, }: { item: Object }) {
    return <WrappedNewsItem itemID={item} />;
  }

  return <FlatList data={topStories} keyExtractor={(item, index) => `${item}-${index}`} renderItem={renderStory} />;
}

export default withTopStory(DemoHoC);