import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Linking} from 'react-native';

const home =({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.contain}>
                <TouchableOpacity
                        onPress={()=> Linking.openURL('https://eclass.donga.ac.kr/')}
                        //onPress={()=> navigation.navigate('scrollTest')}
                        style={styles.btn}>
                        <Text style={{color:'black', fontSize:25}}>가상대학</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={()=> navigation.navigate('map')}
                        style={styles.btn}>
                        <Text style={{color:'black', fontSize:25}}>교내지도</Text>
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