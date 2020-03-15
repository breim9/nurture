import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';
import { Title3, ExtraInfo, Prompt } from '../constants/text';
import { connect } from 'react-redux';


const Page = styled.View`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:200%;
    padding: 80px 40px;
    backgroundColor: #fff;
    alignItems: flex-start;
    
`

const Close = styled.TouchableOpacity`
    width: 24px;
    height: 20px;
    backgroundColor: ${color.gray100};
    alignSelf: flex-end;
`

const CloseText = styled.Text`
    textAlign: center;
    color: ${color.gray900}
`


class NewStackBuilder extends Component {
    render() {
        return (
            <Page>
                <Close>
                    <CloseText>X</CloseText>
                </Close>
                <Title3>Create a Stack</Title3>
                <ExtraInfo>A stack is a group of habits done one after another.</ExtraInfo>
                <View style={{ height: 20 }}></View>
                <Prompt>What’s the name of your stack?</Prompt>

            </Page>
        )
    }
}

export default NewStackBuilder;