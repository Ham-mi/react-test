import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const event = () => {
    return(
        <SafeAreaView>
            <View style={styles.contain}>
                <View style={styles.imageup}><Image
                source={require('../../../assets/ThisIs.png')}
                style = {{height:"100%",width:'100%', borderWidth:1, resizeMode:'contain'}}
                /></View>
                <Text style={{fontSize:18, color:'#848484',fontWeight:'bold'}}>진행중인 이벤트가 없습니다.</Text>
            </View>
        </SafeAreaView>
    )
};

export default event;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    imageup:{
        width:122,
        height:150,
        marginBottom:20
    }
});