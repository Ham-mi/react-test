import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const disi = () => {
    return(
        <SafeAreaView>
            <View style={styles.contain}>
                <Text style={{fontSize:55, color:'#0080FF',textDecorationLine:'underline',fontWeight:'bold'}}>DISI</Text>
            </View>
        </SafeAreaView>
    )
};

export default disi;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});