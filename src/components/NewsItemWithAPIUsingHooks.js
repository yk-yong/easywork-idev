/**
 * @file NewsItemWithAPIUsingHooks
 * @version 1.0.0
 * @since 12 August 2019
 * @description Showing details of story
 *
 * @flow
 * @format
 */

import React, { useState, useEffect } from "react";
import { ListItem, Body, Text } from "native-base";
import { apiRoute } from "../../app.json";

type Props = {
  storyID: number
};
export default function NewsItemWithAPIUsingHooks(props: Props) {
  const [story, setStory] = useState({});

  const { storyID } = props;
  useEffect(() => {
    async function fetchStoryDetails(id: number) {
      try {
        const res = await fetch(`${apiRoute}/item/${id}.json?print=pretty`, { method: "GET" }).then(res => res.json());

        if (res) {
          setStory(res);
        }
      } catch (error) {
        // handling error
      }
    }

    fetchStoryDetails(storyID);
  }, [storyID]);

  return (
    <ListItem>
      <Body>
        <Text>
          {story.title}
        </Text>
      </Body>
    </ListItem>
  );
}