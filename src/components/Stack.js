import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';
import { connect } from 'react-redux';
import { toggleStack } from '../redux/actions';


const StackContainer = styled.TouchableOpacity`
    backgroundColor:#fff;
    padding: 16px 32px;
    margin: 16px 16px;
    borderRadius: 9px;
    shadow-opacity: 0.10;
    shadow-radius: 5px;
    shadow-color: black;
    shadow-offset: 0px 3px;
    ${props => props.openState === 'closed' && css`
        backgroundColor: ${color.red500};
    `}
    ${props => props.openState === 'open' && css`
        backgroundColor: ${color.green500};
    `}
`
const InsideWrapper = styled.View`
    overflow:hidden;
    ${props => props.openState === 'closed' && css`
        height:52px;
    `}
`

const StackText = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    color: ${color.gray700};
    marginBottom: 8px;
`

const StackNext = styled.Text`
    fontSize: 14px;
    color: ${color.gray500};
    marginBottom: 12px;
    ${props => props.openState === 'open' && css`
        display: none;
    `}
`


class Stack extends Component {

    render() {

        let open = this.props.isOpen ? "open" : "closed";

        return (
            <StackContainer onPress={() => this.props.toggleStack(this.props.stackId)}>
                <InsideWrapper openState={open}>
                    <StackText>{this.props.title}</StackText>
                    <StackNext openState={open}>{this.props.prompt}</StackNext>
                    <Text>dadfs</Text>
                    <Text>dadfs</Text>
                    <Text>dadfs</Text>
                    <Text>dadfs</Text>
                    <Text>dadfs</Text>
                </InsideWrapper>
            </StackContainer>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    toggleStack,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stack);
