import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class AboutPage extends Component {
    render() {
        // this.props.navigation.getParam("param") for get parameter
        const title = this.props.navigation.getParam('title', 'Friend');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Hello {JSON.stringify(title)}</Text>
                {/* <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                /> */}
            </View>
        );
    }
}