import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import {COLORS, FONTS, SIZES} from '../constants'
import Header from '../components/Header'
import {LinearGradient} from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedTab } from '../store/TabSlice'

const TabButton = ({label, icon, onPress, isFocused}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                <Animated.View
                    style={[{flexDirection:'row', 
                        width: '80%', 
                        height: 50, 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        borderRadius: 25},
                        ]}>
                    <AntDesign name={icon} size={20} color={COLORS.transparentBlack} />
                    {isFocused && <Text numberOfLines={1} style={{marginLeft: SIZES.base, color: COLORS.transparentBlack, ...FONTS.body3}}>{label}</Text>}
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}


const MainScreen = ({drawerAnimetedStyle}) => {
    const dispatch = useDispatch() 
    const {selectedTab} = useSelector(state => state.tab)

    const homeTabFlex = useSharedValue(1);
    const homeTabColor = useSharedValue(COLORS.white);
    const searchTabFlex = useSharedValue(1);
    const searchTabColor = useSharedValue(COLORS.white);
    const cartTabFlex = useSharedValue(1);
    const cartTabColor = useSharedValue(COLORS.white);
    const favouriteTabFlex = useSharedValue(1);
    const favouriteTabColor = useSharedValue(COLORS.white);
    const notificationTabFlex = useSharedValue(1);
    const notificationTabColor = useSharedValue(COLORS.white);

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })
    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

/*    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    })
    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })

    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    })
    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value
        }
    })

    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favouriteTabFlex.value
        }
    })
    const favouriteColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: favouriteTabColor.value
        }
    })

    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    })
    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })

    useEffect(() => {
        if(selectedTab == "Home"){
            homeTabFlex.value = withTiming(4, {duration: 500})
            homeTabColor.value = withTiming(COLORS.primary, {duration: 500})
        } else {
            homeTabFlex.value = withTiming(1, {duration: 500})
            homeTabColor.value = withTiming(COLORS.white, {duration: 500}) 
        }

        if(selectedTab == "Search"){
            searchTabFlex.value = withTiming(4, {duration: 500})
            searchTabColor.value = withTiming(COLORS.primary, {duration: 500})
        } else {
            searchTabFlex.value = withTiming(1, {duration: 500})
            searchTabColor.value = withTiming(COLORS.white, {duration: 500}) 
        }

        if(selectedTab == "Cart"){
            cartTabFlex.value = withTiming(4, {duration: 500})
            cartTabColor.value = withTiming(COLORS.primary, {duration: 500})
        } else {
            cartTabFlex.value = withTiming(1, {duration: 500})
            cartTabColor.value = withTiming(COLORS.white, {duration: 500})
        }

        if(selectedTab == "Favourite"){
            favouriteTabFlex.value = withTiming(4, {duration: 500})
            favouriteTabColor.value = withTiming(COLORS.primary, {duration: 500})
        } else {
            favouriteTabFlex.value = withTiming(1, {duration: 500})
            favouriteTabColor.value = withTiming(COLORS.white, {duration: 500}) 
        }

        if(selectedTab == "Notification"){
            notificationTabFlex.value = withTiming(4, {duration: 500})
            notificationTabColor.value = withTiming(COLORS.primary, {duration: 500})
        } else {
            notificationTabFlex.value = withTiming(1, {duration: 500})
            notificationTabColor.value = withTiming(COLORS.white, {duration: 500}) 
        }
    }, [selectedTab])*/

  return (
    <Animated.View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        ...drawerAnimetedStyle
    }}>
        <Header/>
      <Text>MainScreen</Text>
      <View style={{height: 100, width: '100%', justifyContent: 'flex-end'}}>
        <LinearGradient
            start={{x:0, y:0}}
            end={{x:0, y:4}}
            colors={[
                COLORS.transparent,
                '#333'
            ]}
            style={{
                position: 'absolute',
                top: -20,
                left: 0,
                right: 0,
                height: 100,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}
        />
        <View style={{flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white
        }}>
            <TabButton 
                label="Home"
                icon="home"
                isFocused={"Home" == selectedTab}
                //outerContainerStyle={homeFlexStyle}
                //innerContainerStyle={homeColorStyle}
                onPress={() => dispatch(setSelectedTab("Home"))}
            />
            <TabButton 
                label="Search"
                icon="search1"
                isFocused={"Search" == selectedTab}
                //outerContainerStyle={searchFlexStyle}
                //innerContainerStyle={searchColorStyle}
                onPress={() => dispatch(setSelectedTab("Search"))}
            />
            <TabButton 
                label="Cart"
                icon="tagso"
                isFocused={"Cart" == selectedTab}
                //outerContainerStyle={cartFlexStyle}
                //innerContainerStyle={cartColorStyle}
                onPress={() => dispatch(setSelectedTab("Cart"))}
            />
            <TabButton 
                label="Favourite"
                icon="hearto"
                isFocused={"Favourite" == selectedTab}
                //outerContainerStyle={favouriteFlexStyle}
                //innerContainerStyle={favouriteColorStyle}
                onPress={() => dispatch(setSelectedTab("Favourite"))}
            />
            <TabButton 
                label="Notification"
                icon="notification"
                isFocused={"Notification" == selectedTab}
                //outerContainerStyle={notificationFlexStyle}
                //innerContainerStyle={notificationColorStyle}
                onPress={() => dispatch(setSelectedTab("Notification"))}
            />

        </View>
      </View>  
    </Animated.View>
  )
}

export default MainScreen