import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

export default function Landing() {
  const { navigate } = useNavigation()

  const navigateToGiveClasses = () => navigate('GiveClasses')
  const navigateToStudy = () => navigate('Study')

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton onPress={navigateToStudy} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={navigateToGiveClasses} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>Total de 200 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}