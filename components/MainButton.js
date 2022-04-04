import { Text, View, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import {SIZES, FONTS, COLORS} from '../constants'

const MainButton = ({label, bgColor, textColor}) => {

    return (
      <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: bgColor}}>
            <Text style={{
                color: textColor, 
                justifyContent: 'center',
                textAlign: 'center',
                ...FONTS.body3}}>
                {label}
            </Text>
      </TouchableOpacity>
    )

}

export default MainButton