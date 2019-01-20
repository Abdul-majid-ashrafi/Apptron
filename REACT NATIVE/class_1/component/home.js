import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeComponent extends Component {
    // static navigationOptions = {
    //     title: 'Welcome Home',
    //     headerStyle: {
    //         backgroundColor: '#232323',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };
    render() {
        // this.props.navigation.navigate("PAGENAME") send to new page
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go To About"
                    // onPress={() => navigate("About")}
                    onPress={() => navigate('About', { title: 'I am Majid' })}
                />
            </View>
        );
    }
}
// static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('otherParam', 'A Nested Details Screen'),
//     };
//   };