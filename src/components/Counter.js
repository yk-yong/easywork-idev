/**
 * @file Counter
 * @version 1.0.0
 * @since 16 July 2019
 * @description Counter component
 *
 * @flow
 * @format
 */

import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Icon, Text } from "native-base";
import useCounter from "../hooks/useCounter";

type Props = {}
export default function Counter(props: Props) {
  const { counter, handleOnPressDecrease, handleOnPressIncrease } = useCounter(0);

  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handleOnPressDecrease}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
      </TouchableOpacity>
      <View style={{ borderColor: "#000", borderWidth: 3, height: 40, width: 40, alignItems: "center", justifyContent: "center" }}>
        <Text>{counter}</Text>
      </View>
      <TouchableOpacity onPress={handleOnPressIncrease}>
        <Icon name="keyboard-arrow-right" type="MaterialIcons" />
      </TouchableOpacity>
    </View>
  );
}