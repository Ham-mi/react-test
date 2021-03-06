import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import page1 from '../src_1/studentId';
import page2 from '../src_1/playList';
import topTab from './toptab';
import home from './home';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator 
            initialRouteName="home"
            screenOptions={{
                
            }}
            >
            <Tab.Screen name="홈" component={topTab} />
            <Tab.Screen name="캠퍼스정보" component={page2}/>
            <Tab.Screen name="toptab" component={topTab}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
};
export default App;

const styles = StyleSheet.create({});