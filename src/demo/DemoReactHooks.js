/**
 * @file DemoReactHooks
 * @version 1.0.0
 * @since 09 August 2019
 * @description Demo React Hooks 1
 *
 * @flow
 * @format
 */

import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Container, Content } from "native-base";
import { apiRoute } from "../../app.json";
import NewsItemWithAPIUsingHooks from "../components/NewsItemWithAPIUsingHooks";
// import useStory from "../hooks/useStory";

export default function DemoReactHooks() {
  // const topstories = useStory("topstories");

  const [topStory, setTopStory] = useState([]);

  useEffect(() => {
    async function fetchTopStories() {
      try {
        const res = await fetch(`${apiRoute}/topstories.json?print=pretty`, {
          method: "GET",
        }).then(res => res.json());

        if (res) {
          setTopStory([...res]);
        }
      } catch (error) {
        // handling error
      }
    }

    fetchTopStories();
  }, []);

  function renderStory({ item, }: { item: Object }) {
    return (
      <NewsItemWithAPIUsingHooks storyID={item} />
    );
  }

  return (
    <Container>
      <Content>
        <FlatList data={topStory} keyExtractor={(item, index) => `${item}-${index}`} renderItem={renderStory} />
      </Content>
    </Container>
  );
}