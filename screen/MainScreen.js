import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import {COLORS, FONTS, SIZES} from '../constants'
import Header from '../components/Header'
import {LinearGradient} from 'expo-linear-gradient';
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedTab } from '../store/TabSlice'
import Walkthrough from './Walkthrough'
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


const MainScreen = ({drawerAnimetedStyle}) => {
  const dispatch = useDispatch() 
  const {selectedTab} = useSelector(state => state.tab)
  const navigation = useNavigation()

return (
  <Animated.View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: COLORS.white,
      ...drawerAnimetedStyle
  }}>
      <TouchableOpacity 
        onPress={() => navigation.openDrawer()}
        style={{borderColor: COLORS.transparentBlack, borderWidth: 1, borderRadius: SIZES.base, alignSelf: 'flex-start', marginTop: 50, marginLeft: 20}}>
            <MaterialIcons name="menu" size={24} color={COLORS.transparentBlack} style={{padding: SIZES.base}} />
      </TouchableOpacity>
      <Walkthrough/>
  </Animated.View>
)
}

export default MainScreen

/*const MainScreen = ({drawerAnimetedStyle}) => {
    const dispatch = useDispatch() 
    const {selectedTab} = useSelector(state => state.tab)

  return (
    <Animated.View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        ...drawerAnimetedStyle
    }}>
        <Header/>
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
        </View>
      </View>  
    </Animated.View>
  )
}

export default MainScreen*/