import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'

import { loadFavorites } from '../TeacherList'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import styles from './styles'

export default function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([])

  useEffect(() => loadFavorites(setFavorites))

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teacher: Teacher, index) => (
          <TeacherItem
            teacher={teacher}
            favorited
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  )
}