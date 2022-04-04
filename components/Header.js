import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {COLORS, FONTS, SIZES, images} from '../constants'
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
  return (
    <View 
    style={{
        flexDirection: 'row',
        height: 50, 
        paddingHorizontal: SIZES.padding, 
        marginTop: 40,
        alignItems: 'center' }}>
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}
            style={{borderColor: COLORS.transparentBlack, borderWidth: 1, borderRadius: SIZES.base}}>
                <MaterialIcons name="menu" size={24} color={COLORS.transparentBlack} style={{padding: SIZES.base}} />
            </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={FONTS.h3}>Home</Text>
        </View>
        <Image source={images.avatar_1} style={{width: 50, height: 50, borderRadius: SIZES.radius}}/>
    </View>
  )
}

export default Header