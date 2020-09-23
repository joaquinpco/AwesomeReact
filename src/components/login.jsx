import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

import getUser from '../utils/getUser';

export default class Login extends Component 
{
    async comprobarLogin(props)
    {
        console.log(await getUser('perico', 'perico'));
        props.onLoginPress();
    }
    
    render()
    {
        return (
            <ScrollView style={{padding: 20}}>
            <Text 
                style={{fontSize: 27}}>
                Login
            </Text>
            <TextInput placeholder='Username' />
            <TextInput placeholder='Password' />
            <View style={{margin:7}} />
            <Button 
                onPress={() => this.comprobarLogin(this.props)}
                title="Submit"
            />
            </ScrollView>
        )
    }
}