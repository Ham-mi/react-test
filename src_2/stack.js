import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import page1 from '../src_1/studentId';
import page2 from '../src_1/playList';
import topTab from './toptab';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="home">
            <Tab.Screen name="home" component={page1}/>
            <Tab.Screen name="page2" component={page2}/>
            <Tab.Screen name="toptab" component={topTab}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
};
export default App;