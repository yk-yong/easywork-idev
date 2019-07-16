/**
 * @file DemoHook
 * @version 1.0.0
 * @since 16 July 2019
 * @description Demo for React Hooks
 *
 * @flow
 * @format
 */

import React from "react";
import { Container, Content } from "native-base";
import Counter from "../components/Counter";

type Props = {}
export default function DemoHook(props: Props) {
  return (
    <Container>
      <Content padder>
        <Counter />
      </Content>
    </Container>
  );
}