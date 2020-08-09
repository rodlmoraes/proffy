import React from 'react'
import { View, Image, Text } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import heartOutlinedIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import styles from './styles';

export default function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars0.githubusercontent.com/u/51234382?s=460&u=9ee33715e817b0e9a45a7149deffa782a9970df6&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rodrigo Moraes</Text>
          <Text style={styles.subject}>História</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        A jahsajhs jwEHW JAHDJAHF jashe3jhd ajhdhe jwhejwhd.
        {'\n'} {'\n'}
        Jehfwofh efoijwofj fkejfjhwef wkhefkjwehf wkjehf
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlinedIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}