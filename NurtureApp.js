import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from './src/constants/colors';

import { connect } from 'react-redux';
import { newHabit, removeHabit, logHabit, updateHabit, newStack, removeStack, updateStack, toggleStack } from './src/redux/actions';
import Timeline from './src/components/Timeline';
import Stack from './src/components/Stack';
import { PrimaryButton, DisabledButton, ConfirmationButton, WarningButton } from './src/components/Buttons';

const Wrapper = styled.SafeAreaView`
    backgroundColor: #FCFCFC;
`


class NurtureApp extends Component {

    renderStacks() {
        let stacksList = Object.entries(this.props.stacks);
        let stacks = stacksList.map(item => {
            return (
                <Stack
                    key={item[0]}
                    stackId={item[0]}
                    title={item[1].name}
                    prompt={item[1].nextHabitInStackToDo}
                    isOpen={item[1].stackIsOpen}
                />
            )
        });
        return stacks;

        let openState = "closed";
        // if (this.props.stackIsOpen) openState = "opened";

        //berg
        /* 
        
        - I need to get the individual stack id
        - add the openState as a prop on the container
        - style accordingly
        
        */
    }

    render() {
        let stacks = this.renderStacks();
        return (
            <Wrapper>
                <Timeline />
                {stacks}
                {/* <PrimaryButton title="Enter" />
                <DisabledButton title="Enter" />
                <ConfirmationButton title="Enter" />
                <WarningButton title="Enter" />
                <Button title="New Habit" onPress={() => this.props.newHabit(newHabit)} />
                <Button title="Remove Habit" onPress={() => this.props.removeHabit(habitId)} />
                <Button title="Log Habit" onPress={() => this.props.logHabit(habitId, today, logHabitResult)} />
                <Button title="Update Habit" onPress={() => this.props.updateHabit(habitId, updateType, update)} />
                <Button title="New Stack" onPress={() => this.props.newStack(newStack)} />
                <Button title="Remove Stack" onPress={() => this.props.removeStack(stackId)} />
                <Button title="Update Stack" onPress={() => this.props.updateStack(stackId, stackUpdate)} /> */}
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    newHabit,
    removeHabit,
    logHabit,
    updateHabit,
    newStack,
    removeStack,
    updateStack,
    toggleStack,
};

export default connect(mapStateToProps, mapDispatchToProps)(NurtureApp);
