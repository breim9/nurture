import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

import { connect } from 'react-redux';
import { add } from './src/redux/actions';

class NurtureApp extends Component {

    render() {
        return (
            <SafeAreaView>
                <Button title="Add 3" onPress={() => this.props.add(3)} />
                <Text>{this.props.number.counter}</Text>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    add
};

export default connect(mapStateToProps, mapDispatchToProps)(NurtureApp);
