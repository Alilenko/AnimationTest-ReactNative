import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer'
import MainScreen from "../screen/MainScreen";
import {icons, images, COLORS, SIZES, FONTS} from '../constants'
import { AntDesign } from '@expo/vector-icons';
import Animated from "react-native-reanimated";
import {setSelectedTab} from '../store/TabSlice'
import {useNavigation} from '@react-navigation/native'

const Drawer = createDrawerNavigator()

const CustomItem = ({icon, label}) => {
    const dispatch = useDispatch() 
    const {selectedTab} = useSelector(state => state.tab)
    const navigation = useNavigation();

    const onClick = () => {
        dispatch(setSelectedTab(label))
        navigation.navigate('Home')
    }

    return(
        <TouchableOpacity 
        onPress={onClick}
        style={{backgroundColor: selectedTab == label ? COLORS.transparentBlack : null, flexDirection:'row', height: 40, marginBottom: SIZES.padding, alignItems:'center', paddingLeft:SIZES.padding, borderRadius:SIZES.radius}}>
            <AntDesign name={icon} size={20} color={COLORS.white} />
            <Text style={{marginHorizontal: SIZES.radius, color: COLORS.white, ...FONTS.body3}}>{label}</Text>
        </TouchableOpacity>
    )
}
const topData = [
    {id: 1, icon: "home", lebel: 'Home'},
    {id: 2, icon: "wallet", lebel: 'My wallet'},
    {id: 3, icon: "notification", lebel: 'Notification'},
    {id: 4, icon: "hearto", lebel: 'Favourite'}
]
const bottomData = [
    {id: 1, icon: "search1", lebel: 'Track your order'},
    {id: 2, icon: "tagso", lebel: 'Coupons'},
    {id: 3, icon: "setting", lebel: 'Settings'},
    {id: 4, icon: "addusergroup", lebel: 'Invite a friends'},
    {id: 5, icon: "customerservice", lebel: 'Help Center'}
]

const CustomDrawerContent = ({navigation}) => {

    return(
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{flex: 1}}>
            <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
                <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                    <TouchableOpacity 
                        onPress={() => navigation.closeDrawer()} 
                        style={{alignItems:'center', justifyContent:'center' }}>
                        <AntDesign name="close" size={35} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={{flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center'}}>
                        <Image source={images.avatar_1} style={{width: 50, height: 50, borderRadius: SIZES.radius}}/>
                        <View style={{marginLeft: SIZES.padding}}>
                            <Text style={{color: COLORS.white, ...FONTS.h3}}>Profile name</Text>
                            <Text style={{color: COLORS.white, ...FONTS.body4}}>Profile description</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex: 1, marginTop: SIZES.padding2}}>
                        { topData.map(item => <CustomItem key={item.id} icon={item.icon} label={item.lebel}/>)}
                        <View style={{height: 1, backgroundColor: COLORS.lightGray4, marginVertical: SIZES.padding, marginLeft: SIZES.padding}}/>
                        { bottomData.map(item => <CustomItem key={item.id} icon={item.icon} label={item.lebel}/>)}
                        <View style={{backgroundColor: '#333'}}>
                        <CustomItem label="Logout" icon="logout"/>
                        </View>
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    )  
}

const CustomDrawer = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })
    const animetedStyle = {borderRadius, transform:[{scale}]}

    return(
        <View style={{flex: 1, backgroundColor: COLORS.primary}}>
            <Drawer.Navigator
                drawerType='slide'
                overlayColor='transparent'
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    })
                    return(
                        <CustomDrawerContent navigation={props.navigation}/>
                    )
                }}
            >
                <Drawer.Screen name='MainScreen'>
                    {props => <MainScreen {...props} drawerAnimetedStyle={animetedStyle}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer