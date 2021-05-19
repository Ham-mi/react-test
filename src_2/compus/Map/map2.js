import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';

const mapList = [
    {
        name:'B02',
        title:'법학전문대학원(LS)'
    },
    {
        name:'B03',
        title:'평생교육원(BE)'
    },
    {
        name:'B04',
        title:'종합강의동(BA~BD)'
    },
];

const map =({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.contain}>
                <ScrollView horizontal={true}>
                    {mapList.map((value,index)=> (
                        <TouchableOpacity
                            onPress={()=> alert(value.title)}>
                            <View style={styles.listup}key={index}>
                                <Text style={{fontSize:20}}>{value.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Image
                    source={require('../../../assets/map_bumin_new.jpg')}
                    style = {{height:'90%',width:'100%', borderWidth:1, resizeMode:'contain'}}
                    />
            </View>
        </SafeAreaView>
    )
};

export default map;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%'
    },
    listup:{
        width:60,
        height:40,
        backgroundColor:'#dbdbdb',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:10
    }
});