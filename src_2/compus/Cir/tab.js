import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const tap = () => {
    return(
        <SafeAreaView>
            <View style={styles.contain}>
                <Text style={{fontSize:55, color:'#FF8000',textDecorationLine:'underline',fontWeight:'bold'}}>TAP</Text>
            </View>
        </SafeAreaView>
    )
};

export default tap;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});