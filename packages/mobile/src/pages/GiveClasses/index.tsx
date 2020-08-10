import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import giveClassesBgImg from '../../assets/images/give-classes-background.png'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function GiveClasses() {
  const { goBack } = useNavigation()

  const navigateBack = () => {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClassesBgImg} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor em nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={navigateBack} style={styles.button}>
        <Text style={styles.buttonText}>
          Tudo bem
        </Text>
      </RectButton>
    </View>
  )
}
