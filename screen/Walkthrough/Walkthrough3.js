import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { MotiView, MotiImage} from 'moti'
import { COLORS, images } from '../../constants'

const Walkthrough3 = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={images.pizza} style={{height: '40%', maxWidth: 200, zIndex: 1 }}/>
      <MotiView
        from={{scale: 0.4 }}
        animate={{scale: 1}}
        transition={{
            type: 'timing',
            duration: 1500,
            loop: true
        }}
        style={{width: 40, 
            height: 40, 
            position: 'absolute', 
            top: '20%', left: '20%', 
            borderColor: COLORS.primary, 
            borderWidth:3, 
            borderRadius: 20}}
      />
        <MotiView
        from={{scale: 1 }}
        animate={{scale: 2}}
        transition={{
            type: 'timing',
            duration: 2000,
            loop: true
        }}
        style={{width: 150, 
            height: 150, 
            position: 'absolute', 
            top: '30%', left: '60%', 
            borderColor: COLORS.primary, 
            borderWidth: 5, 
            borderRadius: 75}}
      />
        <MotiView
        from={{scale: 1 }}
        animate={{scale: 0.4}}
        transition={{
            type: 'timing',
            duration: 1500,
            loop: true
        }}
        style={{width: 100, 
            height: 100, 
            position: 'absolute', 
            top: '62%', left: '15%', 
            backgroundColor: COLORS.primary, 
            borderRadius: 50,
            zIndex: 2}}
      />

    </View>
  )
}

export default Walkthrough3