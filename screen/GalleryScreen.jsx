import React from 'react'
import { FlatList,Image,StyleSheet,View } from 'react-native'
import { destinations } from '../data/destination'
export default function GalleryScreen({route}) {
const {id}= route.params;
const place = destinations.find((d)=> d.id === id)
    return (
     <FlatList
      data={place.gallery}
      numColumns={2}
      keyExtractor={(_, index) => String(index)}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.cell}>
          <Image source={{ uri: item }} style={styles.photo} />
        </View>
      )}
    />
  );
        }
    



const styles = StyleSheet.create({
    list: {padding: 8},
    cell:{flex: 1/2,padding: 4},
    photo: {width: '100%', aspectRatio:1,borderRadius: 10}
})
