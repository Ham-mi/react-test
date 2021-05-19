import React from 'react';
import { SafeAreaView, View ,Text, TouchableOpacity,StyleSheet, Image, ScrollView} from 'react-native';
import book from './phoneBook';

const list =[];

for (const key of numList) {
    if(key.mode==1){
        list.push(key);
    }
};

const se = () => {
    return(
        <SafeAreaView>
            <View style={styles.contain}>
                <ScrollView style={styles.viewup}>
                {list.map((value,index)=>(
                    <View style={{alignItems:'center'}}>
                        <View key={index} style={styles.listup}>
                            <View style={styles.listdown}>
                                <Text style={{fontSize:15, color:'#0080FF', fontWeight:'bold'}}>{value.organ}</Text>
                            </View>
                            <View style={styles.listdown}>
                                <View style={{flex:6}}><Text style={{fontSize:18}}>{value.office}</Text></View>
                                <View style={{flex:4, alignItems:'flex-end'}}><Text style={{fontSize:18}}>{value.number}</Text></View>
                            </View>
                        </View>
                    </View>
                ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default se;

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    listup:{
        width:'80%',
        height:70,
        borderBottomWidth:1,
        borderColor:'#dbdbdb',
        
    },
    listdown:{
        flexDirection:'row',
        padding:2,
        marginTop:2
    },
    listdown2:{
        flexDirection:'row',
        padding:2,
        marginTop:2,
    },
    viewup:{
        width:'100%',
        flex:1
    }
});