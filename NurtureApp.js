import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from './src/constants/colors';

import { connect } from 'react-redux';
import { newHabit, removeHabit, logHabit, updateHabit, newStack, removeStack, updateStack, toggleStack, updatePrompt } from './src/redux/actions';
import Timeline from './src/components/Timeline';
import Stack from './src/components/Stack';
import NewStackBuilder from './src/components/NewStackBuilder'
import { PrimaryButton, DisabledButton, ConfirmationButton, WarningButton } from './src/components/Buttons';
import { AddNew } from './src/components/AddNew';
import { createUniqueId, getStacksInOrderedArray, getHabitsInOrderedArray } from './src/helpers.js';

const Wrapper = styled.SafeAreaView`
    backgroundColor: #FCFCFC;
`


class NurtureApp extends Component {

    getNextPrompt(stackId) {
        let habits = getHabitsInOrderedArray(stackId, this.props.habits);
        if (habits.length === 0 || habits[0] === undefined) {
            return "Make your first habit";
        }
        let newPrompt = habits.find(habit => habit[1].currentState === "incomplete");
        newPrompt === undefined ?
            newPrompt = "Complete Stack!" :
            newPrompt = `${newPrompt[1].cue} - ${newPrompt[1].action}`;
        return newPrompt;
    }

    handleNewStack(newStack) {

        let stackId = createUniqueId();
        let stackName = "Stack Name";
        let order = 2; //TODO build an order helper

        let stack =
        {
            [stackId]: {
                name: stackName,
                frequency: 'daily',
                habitKeys: [],
                nextHabitInStackToDo: '',
                completionState: 'incomplete',
                order: order,
                stackIsOpen: false,
                log: {},
            }
        }

        alert("new stack!");
        newStack(stack);
    }

    renderStacks() {
        let stackList = getStacksInOrderedArray(this.props.stacks);
        if (stackList.length === 0) return;
        let stacks = stackList.map(item => {
            console.log("item: ", item);
            if (item === undefined) {
                return <Text>Build your first habit!</Text>
            }
            else {
                return (
                    <Stack
                        key={item[0]}
                        stackId={item[0]}
                        title={item[1].name}
                        prompt={this.getNextPrompt(item[0])}
                        isOpen={item[1].stackIsOpen}
                    />
                )
            }
        });
        return stacks;
    }

    render() {
        let stacks = this.renderStacks();
        return (
            <Wrapper>
                <Timeline />
                {stacks}
                <AddNew
                    title="+ stack"
                    handler={() => this.handleNewStack(this.props.newStack)}
                />
                {/* <NewStackBuilder /> */}
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
    updatePrompt
};

export default connect(mapStateToProps, mapDispatchToProps)(NurtureApp);
