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
  SwipeRow,
  View,
  CardItem,
  Card
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import { observable, action } from "mobx";
import moment from 'moment'

import styles from "./styles"
import { MenuHeader } from "../components"

import { observer, inject } from 'mobx-react';


@inject('JobStore')
@observer
class JobList extends Component {

  componentWillMount() {
    this.props.JobStore.getDatas()
  }

  render() {
    const datas = this.props.JobStore.datas.slice()
    console.log(datas)
    return (
      <Container style={styles.container}>
        <MenuHeader navigation={this.props.navigation}>
          Job list
        </MenuHeader>
        <Content>
          <List
            button
            dataArray={datas}
            renderRow={data =>

              <SwipeRow

                rightOpenValue={-75}
                right={
                  <Button style={styles.bsup}
                    full onPress={() => this.props.navigation.navigate("JobDetails", { data: data })}>
                    <Icon active name="information-circle" />
                  </Button>
                }
                disableRightSwipe
                body={
                  <Grid style={styles.padding}
                    onPress={() => this.props.navigation.navigate("ReceiveGoods", { data: data })}>
                    <Row>
                      <Col style={{ width: '50%' }}>
                        <Text style={styles.textLeft}>
                          {data.jobName}
                        </Text>
                        <Text note style={styles.textLeft}>
                          {data.customerName}
                        </Text>
                      </Col>
                      <Col style={{ width: '50%' }}>
                        <Text note style={styles.textRight}>
                          {moment(data.destDate).format('HH:mm')}
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Text note style={styles.textLeft}>
                        {data.sourceStationName} - {data.destStationName}
                      </Text>
                    </Row>
                  </Grid>
                }
              />

            }

          />
        </Content>

      </Container>
    );
  }
}

export default JobList;
