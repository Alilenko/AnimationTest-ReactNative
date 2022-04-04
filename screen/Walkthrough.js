import React, { useRef, useState } from "react";
import {View, Animated, Text} from 'react-native'
import MainButton from "../components/MainButton";

import {COLORS, SIZES, FONTS} from '../constants'
import Walkthrogh2 from "./Walkthrough/Walkthrogh2";
import Walkthrough1 from "./Walkthrough/Walkthrough1";
import Walkthrough3 from "./Walkthrough/Walkthrough3";

const walkthrougn = [
    {id: 1, title: "Title 1", description: "Description1"},
    {id: 2, title: "Title 2", description: "Description2"},
    {id: 3, title: "Title 3", description: "Description3"},
]

const Walkthrough = () => {
    const [screen2, setScreen2] = useState(false)
    const [screen3, setScreen3] = useState(false)
    const scroolX = useRef(new Animated.Value(0)).current

    const onViewChangeRef = useRef(({viewableItems, changed}) => {
        if(viewableItems[0].index == 1) {
            setScreen2(true)
        } else if(viewableItems[0].index == 2) {
            setScreen3(true)
        }
    })


    const Dots = () => {
        const dotPosition = Animated.divide(scroolX, SIZES.width)

        return(
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {walkthrougn.map((item, index) => {
                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [COLORS.transparentBlack, COLORS.primary, COLORS.transparentBlack],
                        extrapolate: 'clamp'
                    })
                    const dotWidth = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [10, 17, 10],
                        extrapolate: 'clamp'
                    })
                    return(
                        <Animated.View
                            key={`dot-${index}`}
                            style={{
                                borderRadius: 5,
                                marginHorizontal: 6,
                                width: dotWidth, height: 10,
                                backgroundColor: dotColor
                            }}
                        />
                    )
                })}
            </View>
        )
    }
    function renderFooter(){
        return(
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0, right: 0,
                height: SIZES.height * 0.20,
                alignItems:'center',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.height > 700 ? SIZES.padding : 20
            }}>
                <Dots/>
                <View style={{flexDirection: 'row', height: 55, marginBottom: 20}}>
                    <MainButton label="Join now" bgColor={COLORS.lightGray2} textColor={COLORS.primary}/>
                    <MainButton label="Log in" bgColor={COLORS.primary} textColor={COLORS.white}/>
                </View>
            </View>
        )
    }

    return(
        <View style={{flex: 1, backgroundColor: COLORS.white}}>
            <Animated.FlatList
                data={walkthrougn}
                keyExtractor={(item) => item.id}
                horizontal
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewChangeRef.current}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scroolX}}}],
                    {useNativeDriver: false}
                )}
                renderItem={({item, index}) => {
                    return(
                        <View
                            style={{width: SIZES.width, justifyContent: 'center'}}
                        >
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                {index == 0 && <Walkthrough1/>}
                                {index == 1 && <Walkthrogh2 animate={screen2}/>}
                                {index == 2 && <Walkthrough3 />}
                            </View>
                            <View style={{
                                minHeight: SIZES.height * 0.35, 
                                alignItems: 'center',
                                justifyContent: 'flex-start', 
                                padding: SIZES.padding}}>
                                    <Text style={{...FONTS.h1}}>{item.title}</Text>
                                    <Text style={{...FONTS.body3, color: COLORS.transparentBlack, marginTop: SIZES.padding}}>{item.description}</Text>
                            </View>    
                        </View>    
                    )
                }}
            />
            {renderFooter()}
        </View>
    )
}

export default Walkthrough