import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row,
  Card,
  CardItem
} from "native-base";

import moment from 'moment'

import styles from "./styles"

import { BackHeader } from "../components"

class JobDetails extends Component {

  render() {
    const { data } = this.props.navigation.state.params
    return (
      <Container style={styles.container}>
        <BackHeader navigation={this.props.navigation}>
        {data.JobName}
        </BackHeader>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Title>Details</Title>
            </CardItem>
            <CardItem>
              <Body>
                <Row>
                  <Text  >
                    Job name:
                    </Text>
                  <Right>
                    <Text note >
                      {data.jobName}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text  >
                    Code:
                    </Text>
                  <Right>
                    <Text note >
                      {data.jobCode}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text  >
                    License:
                    </Text>
                  <Right>
                    <Text note >
                      {data.license}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text  >
                    Customer:
                    </Text>
                  <Right>
                    <Text note >
                      {data.customerName}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text  >
                    Source date:
                    </Text>
                  <Right>
                    <Text note>
                      {moment(data.sourceDate).format('DD/MM/YYYY HH:mm')}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text>
                    Source station:
                  </Text>
                  <Right>
                    <Text note>
                      {data.sourceStationName}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text  >
                    Dest date:
                    </Text>
                  <Right>
                    <Text note>
                      {moment(data.destDate).format('DD/MM/YYYY HH:mm')}
                    </Text>
                  </Right>
                </Row>
                <Row>
                  <Text  >
                    Dest station:
                    </Text>
                  <Right>
                    <Text note>
                      {data.destStationName}
                    </Text>
                  </Right>
                </Row>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default JobDetails;
