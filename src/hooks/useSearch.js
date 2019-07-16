/**
 * @file useSearch
 * @version 1.0.0
 * @since 15 July 2019
 * @description
 *
 * @flow
 * @format
 */

import { useState } from "react";

export default function useSearch(initValue: string) {
  const [value, setValue] = useState(initValue);

  function onChangeText(text: string) {
    setValue(text);
  }

  function clearText() {
    setValue("");
  }

  return { value, onChangeText, clearText };
}