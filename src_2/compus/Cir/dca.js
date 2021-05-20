import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const dca = () => {
    return(
        <SafeAreaView>
            <View style={styles.contain}>
                <Text style={{fontSize:55, color:'#0B614B',textDecorationLine:'underline',fontWeight:'bold'}}>DCA</Text>
            </View>
        </SafeAreaView>
    )
};

export default dca;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});