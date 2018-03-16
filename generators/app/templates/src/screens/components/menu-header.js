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

export class MenuHeader extends Component {
    render() {
        const { navigation, children } = this.props
        return (
            <Header style={styles.bsup}>
                <Left>
                    <Button 
                        transparent
                        dark
                        onPress={() => navigation.navigate("DrawerOpen")}
                    >
                        <Icon name="ios-menu" />
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