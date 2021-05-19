import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Linking} from 'react-native';

const home =({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.contain}>
                <TouchableOpacity 
                        onPress={()=> navigation.navigate('map1')}
                        style={styles.btn}>
                        <Text style={{color:'black', fontSize:23}}>승학 캠퍼스</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={()=> navigation.navigate('map2')}
                        style={styles.btn}>
                        <Text style={{color:'black', fontSize:23}}>부민 캠퍼스</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={()=> navigation.navigate('map3')}
                        style={styles.btn}>
                        <Text style={{color:'black', fontSize:23}}>구덕 캠퍼스</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default home;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%'
    },
    btn:{
        height:50,
        width:'85%',
        //backgroundColor:'pink',
        justifyContent:'center',
        marginLeft:30,
        borderBottomWidth:1,
        borderColor:'#dbdbdb'
    }
});