/**
 * @file DemoReactHooks
 * @version 1.0.0
 * @since 09 August 2019
 * @description Demo React Hooks 1
 *
 * @flow
 * @format
 */

import React from "react";
import { FlatList } from "react-native";
import { Container, Content } from "native-base";
import NewsItemWithAPIUsingHooks from "../components/NewsItemWithAPIUsingHooks";
import useStory from "../hooks/useStory";

export default function DemoReactHooks() {
  const topstories = useStory("topstories");

  function renderStory({ item, }: { item: Object }) {
    return (
      <NewsItemWithAPIUsingHooks storyID={item} />
    );
  }

  return (
    <Container>
      <Content>
        <FlatList data={topstories.response} keyExtractor={(item, index) => `${item}-${index}`} renderItem={renderStory} />
      </Content>
    </Container>
  );
}