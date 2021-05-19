import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import page1 from '../src_1/studentId';
import page2 from '../src_1/playList';
import home from './home'

const TopTab = createMaterialTopTabNavigator();

const topTab = () => {
    return (
        <TopTab.Navigator
        backBehavior='none'
        >
            <TopTab.Screen name="디스픽" component={home}/>
            <TopTab.Screen name="학교공지" component={page2}/>
        </TopTab.Navigator>

    );
};
export default topTab;