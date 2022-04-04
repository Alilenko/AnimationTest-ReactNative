import React, { useEffect, useRef, useState } from "react";
import {View, Image, StyleSheet} from 'react-native'

import {FlatList} from 'react-native-gesture-handler'
import { SIZES, images, COLORS } from '../../constants'

const ITEM_WIDTH = 120;

const Walkthrough1 = () => {
    const [images1, setImages1] = useState([
        {image: images.baked_fries},
        {image: images.burger_restaurant_1},
        {image: images.burger_restaurant_2},
        {image: images.chicago_hot_dog},
        {image: images.crispy_chicken_burger},
        {image: images.fries_restaurant},
        {image: images.baked_fries},
        {image: images.hawaiian_pizza},
        {image: images.baked_fries},
        {image: images.burger_restaurant_1},
        {image: images.burger_restaurant_2},
        {image: images.chicago_hot_dog},
        {image: images.crispy_chicken_burger},
    ])
    const [currentPosition, setCurrentPosition] = useState(0)

    const [images2, setImages2] = useState([
        {image: images.japanese_restaurant},
        {image: images.pizza_restaurant},
        {image: images.sarawak_laksa},
        {image: images.kolo_mee},
        {image: images.nasi_briyani_mutton},
        {image: images.nasi_lemak},
        {image: images.noodle_shop},
        {image: images.pizza},
        {image: images.japanese_restaurant},
        {image: images.pizza_restaurant},
        {image: images.sarawak_laksa},
        {image: images.kolo_mee},
        {image: images.nasi_briyani_mutton},
        {image: images.nasi_lemak},
        {image: images.noodle_shop},
        {image: images.pizza},
    ])
    const [currentPosition2, setCurrentPosition2] = useState(0)

    const row1flatListRef = useRef()
    const row2flatListRef = useRef()

    useEffect(() => {
        let positionTimer; 

        const timer = () => {
          positionTimer = setTimeout(() => {
                setCurrentPosition(prevPosition => {
                    const position = Number(prevPosition) + 1;
                    row1flatListRef?.current?.scrollToOffset({offset: position, animated: false})
                    
                    const maxOffset = images1.length * ITEM_WIDTH
                    if(prevPosition > maxOffset) {
                        const offset = prevPosition - maxOffset
                        row1flatListRef?.current?.scrollToOffset({offset, animated: false}) 
                        return offset
                    } else {
                        return position
                    }
                })

                setCurrentPosition2(prevPosition => {
                    const position = Number(prevPosition) + 1;
                    row2flatListRef?.current?.scrollToOffset({offset: position, animated: false})
                    
                    const maxOffset = images2.length * ITEM_WIDTH
                    if(prevPosition > maxOffset) {
                        const offset = prevPosition - maxOffset
                        row2flatListRef?.current?.scrollToOffset({offset, animated: false}) 
                        return offset
                    } else {
                        return position
                    }
                })

                timer();
            }, 32)
        } 

        timer();

        return() => {
            clearTimeout(positionTimer)
        }
    }, [])  

    return(
        <View>
            <FlatList
                ref={row1flatListRef}
                decelerationRate='fast'
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                listKey='Slider1'
                keyExtractor={(_, index) => `Slider${index}`}
                data={images1}
                renderItem = {({item, index}) => {
                    return(
                        <View style={{width: 150, alignItems:'center', justifyContent: 'center'}}>
                            <Image source={item.image} style={{width: 140, height: 140, borderRadius: SIZES.padding2}}/>
                        </View>    
                    )
                }}
            />
            <FlatList
                ref={row2flatListRef}
                decelerationRate='fast'
                style={{marginTop: SIZES.padding2, transform: [{rotate: '180deg'}]}}
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                listKey='Slider2'
                keyExtractor={(_, index) => `Slider${index}`}
                data={images2}
                renderItem = {({item, index}) => {
                    return(
                        <View style={{width: ITEM_WIDTH, alignItems:'center', justifyContent: 'center', transform: [{rotate: '180deg'}]}}>
                            <Image source={item.image} style={{ width: 110, height: 110, borderRadius: SIZES.padding2}} />
                        </View>    
                    )
                }}
            />
        </View>
    )
}


export default Walkthrough1