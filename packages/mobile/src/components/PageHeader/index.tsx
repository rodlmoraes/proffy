import React, { PropsWithChildren, ReactNode } from 'react'
import { View, Image, Text } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'
import styles from './styles'


type PageHeaderProps = {
  title: string,
  subtitle?: ReactNode
}

export default function PageHeader({ title, subtitle, children }: PropsWithChildren<PageHeaderProps>) {
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle}
      </View>


      {children}
    </View>
  )
}