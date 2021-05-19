import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import home from './compusHome';
import mapHome from './Map/mapHome';
import map1 from './Map/map1';
import map2 from './Map/map2';
import map3 from './Map/map3';
import numTop from './Num/numToptab';


const Stack = createStackNavigator();

export default StackPage = () => {
    return (
            <Stack.Navigator
                screenOptions={{headerTitle:(
                    <View style={styles.headerStyle}>
                      <Text 
                      style={{fontSize:30,includeFontPadding:false,color:'black',fontWeight:'bold'}}>  캠퍼스 정보</Text>
                    </View>
                    ),
                    headerStyle:{
                        backgroundColor:'white',
                    },
                    headerBackTitleVisible: false
                    ,
                    headerTitleAlign:'left',}}
                initialRouteName='home'>
                <Stack.Screen name ='home' component={home} />
                <Stack.Screen name ='map' component={mapHome} options={{headerTitle:
                    (<View style={styles.headerStyle}>
                        <Text 
                        style={{fontSize:30,includeFontPadding:false,color:'black',fontWeight:'bold'}}>교내 지도</Text>
                    </View>),
                    headerStyle:{backgroundColor:'white',},
                    headerBackTitleVisible: false,
                    headerTitleAlign:'left',}}/>
                {/* <Stack.Screen name ='scrollTest' component={scrollTest}/> */}
                {/* //<Stack.Screen name='home' component={mapHome} /> */}
                <Stack.Screen name='map1' component={map1} options={{headerTitle:(
                    <View style={styles.headerStyle}>
                        <Text 
                        style={{fontSize:30,includeFontPadding:false,color:'black',fontWeight:'bold'}}>승학 캠퍼스</Text>
                    </View>),
                    headerStyle:{backgroundColor:'white',},
                    headerBackTitleVisible: false,
                    headerTitleAlign:'left',}}/>
                <Stack.Screen name='map2' component={map2}  options={{headerTitle:(
                    <View style={styles.headerStyle}>
                        <Text 
                        style={{fontSize:30,includeFontPadding:false,color:'black',fontWeight:'bold'}}>부민 캠퍼스</Text>
                    </View>),
                    headerStyle:{backgroundColor:'white',},
                    headerBackTitleVisible: false,
                    headerTitleAlign:'left',}}/>
                <Stack.Screen name='map3' component={map3} options={{headerTitle:(
                    <View style={styles.headerStyle}>
                        <Text 
                        style={{fontSize:30,includeFontPadding:false,color:'black',fontWeight:'bold'}}>구덕 캠퍼스</Text>
                    </View>),
                    headerStyle:{backgroundColor:'white',},
                    headerBackTitleVisible: false,
                    headerTitleAlign:'left',}}/>

                <Stack.Screen name ='numtop' component={numTop} options={{headerTitle:
                    (<View style={styles.headerStyle}>
                        <Text 
                        style={{fontSize:30,includeFontPadding:false,color:'black',fontWeight:'bold'}}>전화번호</Text>
                    </View>),
                    headerStyle:{backgroundColor:'white',},
                    headerBackTitleVisible: false,
                    headerTitleAlign:'left',}}/>
            </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});