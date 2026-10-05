import React from 'react'
import { destinations } from '../data/destination'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
export default function HomeScreen({navigation}) {
  return (
    <FlatList
      data={destinations}
      keyExtractor={(item)=> item.id}
      containerStyle={styles.list}
      renderItem={({item})=>(

        <Pressable
          style={styles.card}
          onPress={()=> navigation.navigate('Details',{id:item.id,title:item.title})}
        >

          <Image source={{uri: item.heroImage}} style={styles.image}/>
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.region}>{item.region}</Text>
            </View>

        </Pressable>
      )}
    >
      

    </FlatList>
  )
}


const styles = StyleSheet.create({
  list:{padding: 16},
  card:{
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 16,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  marginHorizontal: 5
},
image:{
  width: '100%',
  height: 180
},
info:{
  padding: 16
},
title:{
  fontSize: 20, fontWeight:'700'
},
region: {
  fontSize: 16, fontWeight:'500', color: '#777', marginTop: 4
}


})