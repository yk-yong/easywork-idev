/**
 * @file NewsItem
 * @version 1.0.0
 * @since 13 July 2019
 * @description Hacker News item show summary info
 *
 * @flow
 * @format
 */

import React from "react";
import { ListItem, Body, Text } from "native-base";
import withItemDetails from "../HoC/withItemDetails";

type Props = {
  details?: any,
  itemID?: number
}
function NewsItem(props: Props) {
  const { details } = props;

  return (
    <ListItem>
      <Body>
        <Text>{details ?.title || ""}</Text>
      </Body>
    </ListItem>
  );
}


export default withItemDetails(NewsItem);