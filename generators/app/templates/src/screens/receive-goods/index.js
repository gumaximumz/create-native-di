import React, { Component } from "react"
import {
  Text,
  View, TouchableHighlight
} from "react-native"
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row,
  Card,
  CardItem,
  Footer
} from "native-base"
import SignatureCapture from 'react-native-signature-capture'

import { observer, inject } from 'mobx-react';

import { BackHeader } from "../components"

import styles from "./styles"

@inject('JobStore')
class ReceiveGoods extends Component {

  constructor(props) {
    super(props)
    this.onSaveEvent = this.onSaveEvent.bind(this)

  }

  render() {
    const { data } = this.props.navigation.state.params
    console.log('job', data)
    return (
      <Container style={styles.container}>
        <BackHeader navigation={this.props.navigation}>
          {data.jobName}
        </BackHeader>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ alignItems: "center", justifyContent: "center" }}>Signature capture for customer </Text>
          <SignatureCapture
            style={[{ flex: 1 }, styles.signature]}
            ref="sign"
            onSaveEvent={(result) => this.onSaveEvent(result, data.id)}
            onDragEvent={this.onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            viewMode={"portrait"} />

          <Footer>
            <TouchableHighlight style={styles.saveButton}
              onPress={() => { this.saveSign() }} >
              <Text>Save</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.resetButton}
              onPress={() => {
                this.resetSign()
              }} >
              <Text>Reset</Text>
            </TouchableHighlight>
          </Footer>
          <Text>{this.refs["sign"]}</Text>
        </View>
      </Container>
    )
  }

  saveSign() {
    this.refs["sign"].saveImage()
  }

  resetSign() {
    this.refs["sign"].resetImage()
  }

  onSaveEvent(result, id) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    this.props.JobStore.confirmGoods(result, id)
    this.props.navigation.goBack()

  }
  onDragEvent() {
    // This callback will be called when the user enters signature
    console.log("dragged")
  }

}


export default ReceiveGoods