import React from 'react'
import { destinations } from '../data/destination'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function DetailsScreen({route,navigation}) {
  const {id} = route.params;
  const place = destinations.find((d)=> d.id === id);
    return (
    <ScrollView style={styles.container}>
            <Image source={{uri: place.heroImage}} style={styles.heroImage}/>
            <View style={styles.body}>
                <Text style={styles.title}>
                    {place.title}, {place.region}
                </Text>
                <Text style={styles.summary}>
                    {place.summary}
                </Text>
                <Text style={styles.meta}>
                    Best time: {place.bestTime}
                </Text>
                <Text style={styles.meta}>
                    Climate: {place.climate}
                </Text>

                <Text style={styles.heading}>Highlights</Text>
                     {
                    place.highlights.map((h)=>(

                        <Text key={h} style={styles.item}>{h}</Text> 
                    ))}

                    <Text  style={styles.heading}>Travel Tips</Text>
            
                    {
                        place.travelTips.map((t)=>(
                            <Text key={t} style={styles.item}>{t}</Text>
                        ))
                    }

                    <View style={styles.buttons}>
                        <Button
                        title="View Gallery"
                        onPress={()=> navigation.navigate("Gallery",{id:place.id})}
                        />
                        <View style={{height: 10}}/>

                        <Button
                            title="Go back"
                            color="gray"
                            onPress={()=> navigation.goBack()}
                        />
                    </View>
            </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    hero:{
        width: '100%',
        height: 240,
    },
    body:{
        padding: 16
    },
    title:{
        fontSize: 24, fontWeight: '700'
    },
    summary:{
        marginVertical: 10,fontSize: 15,lineHeight:22,
        color: '#444'
    },
    meta:{
        fontSize: 18,fontWeight:'700',marginTop: 18,marginBottom:6
    },
    heading:{
        fontSize: 20,fontWeight:'700',marginTop: 18,marginBottom:6
    },
    item:{
        fontSize: 16,lineHeight: 22,color: '#333'
    },
    buttons:{
        marginTop: 16,marginBottom: 30
    }

})
