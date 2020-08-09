import React, { PropsWithChildren } from 'react'
import { View, Image, Text } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'
import styles from './styles'


type PageHeaderProps = {
  title: string
}

export default function PageHeader({ title, children }: PropsWithChildren<PageHeaderProps>) {
  const { navigate } = useNavigation()
  const goBack = () => {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={goBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoIcon} resizeMode='contain' />
      </View>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  )
}