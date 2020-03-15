import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';

const DayElement = styled.View`
    margin: 4px 8px;
    padding: 16px 16px;
    backgroundColor: ${color.gray100};
    display: flex;
    alignItems: center;
`

const DayText = styled.Text`
    fontSize: 17px;
    color: ${color.gray300};
`

const Day = (props) => {
    return (
        <DayElement>
            <DayText>{props.name}</DayText>
            <DayText>{props.date}</DayText>
        </DayElement>
    )
}

export default Day;