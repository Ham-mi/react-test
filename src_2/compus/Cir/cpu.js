import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const cpu = () => {
    return(
        <SafeAreaView>
            <View style={styles.contain}>
                <Text style={{fontSize:55, color:'#2E2E2E',textDecorationLine:'underline',fontWeight:'bold'}}>CPU</Text>
            </View>
        </SafeAreaView>
    )
};

export default cpu;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});