import { StyleSheet, Pressable, Image, Text, View, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

function MealItem ({ title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation('MealDetailsScreen');
  
  return (
    <View style={styles.mealItem}>
    <Pressable 
        android_ripple={{color:'#ccc'}}
        style={({ pressed}) => (pressed ? styles.buttonPressed : null )} >
            <View style={styles.innerContainer}>            
                <View style={styles.imgDetails}>
                    <Image
                        source={{uri: imageUrl }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration} Bhan</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>      
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#fff',
        elevation: 4,
        backgroundColor: '#fff',
        shadowColor : 'black',
        shadowOpacity:0.25,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 8,
    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
        fontSize: 18,
        margin: 8
    },
    imgDetails:{
        alignItems: 'center',
        justifyContent:'center'
    },
    details: {
        flexDirection : 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent:'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 10
    },
    buttonPressed:{
        opacity:  0.5
    },
})