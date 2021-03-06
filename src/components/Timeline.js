import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';
import Day from './Day';

const MonthText = styled.Text`
    fontSize: 16px;
    color: ${color.green700};
    fontWeight: bold;
    margin: 0px 0px 8px 16px;
`

const TimelineContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    width: 100%;
`

const TimelineWrapper = styled.View`
    margin: 32px 0px;
`


export default class Timeline extends Component {
    render() {
        return (
            <TimelineWrapper>
                <MonthText>January</MonthText>
                <TimelineContainer>
                    <Day name="Mon" date="02" />
                    <Day name="Tue" date="03" />
                    <Day name="Wed" date="04" />
                    <Day name="Thu" date="05" />
                    <Day name="Fri" date="06" />
                    <Day name="Sat" date="07" />
                    <Day name="Sun" date="08" />
                </TimelineContainer>
            </TimelineWrapper>
        )
    }
}