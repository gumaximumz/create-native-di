import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Image } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { observable, action } from "mobx"
import { observer } from "mobx-react"
import styles from "./styles";

@observer
class Login extends Component {

  @observable username
  @observable password

  render() {
    const drawerImage = require("../../../assets/logo/Hello.png");
    return (
      <Container style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={drawerImage} style={styles.drawerCover} />
        </View>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={this.username}
                onChangeText={e => this.username = e} />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                value={this.password}
                onChangeText={e => this.password = e} />
            </Item>

          </Form>
          <Button
            disabled={!this.username || !this.password}
            block
            style={styles.btnLogin}
            onPress={() => this.props.navigation.navigate("JobList")}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;