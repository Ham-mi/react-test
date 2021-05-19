import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import page1 from '../src_1/studentId';
import page2 from '../src_1/playList';
import topTab from './toptab';
import home from './home';

const Tab = createStackNavigator();

const App = () => {
    return (
        <Tab.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerTitle:(
                    <View style={styles.headerStyle}>
                      <Text 
                      style={{fontSize:30,includeFontPadding:false,color:'black'}}>  THIS IS</Text>
                    </View>
                    ),
                    headerStyle:{
                        backgroundColor:'white',
                    },
                    headerBackTitleVisible: false
                    ,
                    headerTitleAlign:'left',

            }}
            >
            <Tab.Screen name="홈" component={topTab} />
            <Tab.Screen name="캠퍼스정보" component={page2}/>
            <Tab.Screen name="toptab" component={topTab}/>
        </Tab.Navigator>
    );
};
export default App;

const styles = StyleSheet.create({});