/**
 * @file Searchbar.android
 * @version 1.0.0
 * @since 16 July 2019
 * @description Rounded Searchbar for android
 *
 * @flow
 * @format
 */

import React from "react";
import { Item, Input, Icon, NativeBase } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import useSearch from "../../hooks/useSearch";

type Props = {}
export default function Searchbar(props: Props & NativeBase.Input) {
  const { clearText, ...searchbar } = useSearch("");

  return (
    <Item rounded>
      <Input {...searchbar} {...props} placeholder="Search" />
      <TouchableOpacity onPress={clearText}>
        <Icon name="close" style={{ fontSize: 18, paddingRight: 15 }} />
      </TouchableOpacity>
    </Item>
  );
}