/**
 * @file useCounter
 * @version 1.0.0
 * @since 16 July 2019
 * @description Custom Hooks for counter
 *
 * @flow
 * @format
 */

import { useState } from "react";

export default function useCounter(initValue: number) {
  const [counter, setCounter] = useState(initValue);

  function handleOnPressIncrease() {
    setCounter(counter => counter + 1);
  }

  function handleOnPressDecrease() {
    setCounter(counter => counter - 1);
  }

  return { counter, handleOnPressDecrease, handleOnPressIncrease };
}