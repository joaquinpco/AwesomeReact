import React, { Component, useState } from 'react';
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
    async comprobarLogin(props, state)
    {
        const username = state.username;
        const password = state.password;

        if(username.length == 0 || password.length == 0)
        {
            console.log('error, debe existir usuario o contraseña.');
            return;
        }

        const response = await getUser(username, password);
        const user = response.data.user;
        
        if(user) // user !== null && user !== undefined
        {
            props.onLoginPress();
        }
    }

    state = {
        username: '',
        password: ''
    };
    
    render()
    {
        return (
            <ScrollView style={{padding: 20}}>
            <Text 
                style={{fontSize: 27}}>
                Login
            </Text>
            <TextInput placeholder='Username' onChangeText={(value) => this.setState({username: value})} value={this.state.username} />
            <TextInput placeholder='Password' onChangeText={(value) => this.setState({password: value})} value={this.state.password} />
            <View style={{margin:7}} />
            <Button 
                onPress={() => this.comprobarLogin(this.props, this.state)}
                title="Submit"
            />
            </ScrollView>
        )
    }
}