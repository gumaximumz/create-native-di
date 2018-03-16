import React, { Component } from "react";
import {
    Header,
    Title,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body
} from "native-base";

import styles from "./styles"

export class BackHeader extends Component {
    render() {
        const { navigation, children } = this.props
        return (
            <Header style={styles.bsup}>
            <Left>
              <Button dark transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>{children}</Title>
            </Body>
            <Right />
          </Header>
        );
    }
}