/**
 * @file Searchbar.ios
 * @version 1.0.0
 * @since 16 July 2019
 * @description Rounded Searchbar for ios
 *
 * @flow
 * @format
 */

import React from "react";
import { Item, Input, Icon, Button, NativeBase } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import useSearch from "../../hooks/useSearch";

type Props = {}
export default function Searchbar(props: Props & NativeBase.Input) {
  const searchbar = useSearch("");

  return (
    <Item regular>
      <Input {...props} {...searchbar} />
      <TouchableOpacity onPress={searchbar.clearText}>
        <Icon name="close" style={{ fontSize: 18 }} />
      </TouchableOpacity>
    </Item>
  );
}