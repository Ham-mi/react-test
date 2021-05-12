import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import page1 from '../src_1/studentId';
import page2 from '../src_1/playList';

const TopTab = createMaterialTopTabNavigator();

const topTab = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="home" component={page1}/>
            <TopTab.Screen name="page2" component={page2}/>
        </TopTab.Navigator>

    );
};
export default topTab;