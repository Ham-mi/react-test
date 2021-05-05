import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import home from './home';
import studentID from './studentId';

const Stack = createStackNavigator();

export default StackPage = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName='home'>
                <Stack.Screen name ='home' component={home} />
                <Stack.Screen name ='studentID' component={studentID}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};