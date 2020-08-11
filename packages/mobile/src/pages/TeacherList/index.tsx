import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'
import api from '@proffy/axios'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

export default function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  useEffect(() =>
    loadFavorites(favorites =>
      setFavorites(favorites.map(({ user_id }) => user_id))
    )
  )

  const toggleFilters = () => setFiltersVisible(!filtersVisible)
  const onSubmit = () => {
    api
      .get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then(({ data }) => {
        setTeachers(data)
        setFiltersVisible(false)
      })
      .catch(() => alert('Preencha todos os campos'))
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title='Proffys diponíveis'
        subtitle={
          <BorderlessButton onPress={toggleFilters}>
            <Feather name='filter' size={24} color='#FFF' />
          </BorderlessButton>
        }
      >
        {filtersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor='#C1BCCC'
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholder='Qual a matéria?'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor='#C1BCCC'
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder='Qual o dia?'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor='#C1BCCC'
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder='Qual a hora?'
                />
              </View>
            </View>
            <RectButton onPress={onSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher, index) => (
          <TeacherItem
            teacher={teacher}
            favorited={favorites.includes(teacher.user_id)}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export const loadFavorites = (callback: (favorites: Teacher[]) => void) => {
  AsyncStorage.getItem('favorites').then(response => {
    if (!response) return
    const favorites = JSON.parse(response)
    callback(favorites)
  })
}
