import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import disi from './disi';
import tab from './tab';
import cpu from './cpu';
import dca from './dca';

const TopTab = createMaterialTopTabNavigator();

const toptab = () =>{
    return(
        <TopTab.Navigator>
            <TopTab.Screen name='DISI' component={disi}/>
            <TopTab.Screen name='TAB' component={tab}/>
            <TopTab.Screen name='CPU' component={cpu}/>
            <TopTab.Screen name='DCA' component={dca}/>
        </TopTab.Navigator>
    )
};

export default toptab;