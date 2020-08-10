import React, { useState } from 'react'
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api';
import heartOutlinedIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import styles from './styles';

export type Teacher = {
  avatar: string,
  bio: string,
  price: number,
  name: string,
  subject: string,
  phone: string,
  user_id: string,
}

type TeacherItemProps = {
  teacher: Teacher,
  favorited: boolean
}

export default function TeacherItem({ teacher, favorited }: TeacherItemProps) {
  const {
    avatar,
    bio,
    price,
    name,
    subject,
    phone,
    user_id,
  } = teacher

  const [isFavorited, setIsFavorited] = useState(favorited)

  const toggleFavorited = async () => {
    const favorites = await AsyncStorage.getItem('favorites')
    const favoritesArray: Teacher[] = []

    if (favorites) favoritesArray.concat(JSON.parse(favorites))

    if (isFavorited) {
      setIsFavorited(false)
      favoritesArray.filter(teacherItem => teacherItem.user_id !== user_id)
    } else {
      setIsFavorited(true)
      favoritesArray.push(teacher)
    }

    AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {price}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={toggleFavorited}
            style={[
              styles.favoriteButton,
              isFavorited && styles.favorited
            ]}
          >
            {isFavorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlinedIcon} />
            }
          </RectButton>

          <RectButton onPress={() => sendWhatsapp(phone, user_id)} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

const sendWhatsapp = (phone: string, user_id: string) => {
  createConnection(user_id)
  Linking.openURL(`whatsapp://send?phone=${phone}`)
}

const createConnection = (user_id: string) => {
  api.post('connections', { user_id })
}