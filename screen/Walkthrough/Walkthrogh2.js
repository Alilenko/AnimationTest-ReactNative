import { View, Text, StyleSheet, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useDynamicAnimation,  MotiView, MotiImage} from 'moti'
import { images, SIZES } from '../../constants'

const Walkthrogh2 = ({animate}) => {

    const motiImage1 = useDynamicAnimation(() => ({
        top: '30%',
        left: '25%'
    }))
    const motiImage2 = useDynamicAnimation(() => ({
        top: '45%',
        left: '15%'
    }))
    const motiImage3 = useDynamicAnimation(() => ({
        top: '58%',
        left: '25%'
    }))
    const motiImage4 = useDynamicAnimation(() => ({
        top: '61%',
        left: '50%'
    }))
    const motiImage5 = useDynamicAnimation(() => ({
        top: '27%',
        left: '55%'
    }))
    const motiImage6 = useDynamicAnimation(() => ({
        top: '50%',
        left: '65%'
    }))

    useEffect(() => {
        if(animate){
            motiImage1.animateTo({
                top: '20%',
                left: '15%',
            })
            motiImage2.animateTo({
                top: '38%',
                left: '-10%',
            })
            motiImage3.animateTo({
                top: '62%',
                left: '5%',
            })
            motiImage4.animateTo({
                top: '75%',
                left: '40%',
            })
            motiImage5.animateTo({
                top: '15%',
                left: '55%',
            })
            motiImage6.animateTo({
                top: '50%',
                left: '80%',
            })
        }
    },[animate])

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
        <Image
            source={images.hawaiian_pizza}
            style={{position: 'absolute', top: '40%', left: '45%', zIndex: 1, width: 120, height: 146 }}
        />
        <MotiImage
        state={motiImage1}
        source={images.tomato_pasta}
        style={styles.image}
      />
        <MotiImage
            state={motiImage2}
            source={images.hawaiian_pizza}
            style={styles.image}
        />
        <MotiImage
            state={motiImage3}
            source={images.crispy_chicken_burger}
            style={styles.image}
        />
        <MotiImage
            state={motiImage4}
            source={images.chicago_hot_dog}
            style={styles.image}
        />
        <MotiImage
            state={motiImage5}
            source={images.burger_restaurant_1}
            style={styles.image}
        />
        <MotiImage
            state={motiImage6}
            source={images.baked_fries}
            style={styles.image}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 98,
        height: 140,
        zIndex: 0,
        borderRadius: SIZES.radius
    }
})

export default Walkthrogh2

/*      <Image
        state={motiImage1}
        source={images.tomato_pasta}
        style={styles.image}
      />
        <Image
            state={motiImage2}
            source={images.hawaiian_pizza}
            style={styles.image}
        />
        <Image
            state={motiImage3}
            source={images.crispy_chicken_burger}
            style={styles.image}
        />
        <Image
            state={motiImage4}
            source={images.chicago_hot_dog}
            style={styles.image}
        />
        <Image
            state={motiImage5}
            source={images.burger_restaurant_1}
            style={styles.image}
        />
        <Image
            state={motiImage6}
            source={images.baked_fries}
            style={styles.image}
        />*/