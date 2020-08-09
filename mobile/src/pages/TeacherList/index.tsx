import React from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'

import TeacherItem from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys diponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            placeholderTextColor="#C1BCCC"
            style={styles.input}
            placeholder="Qual a matéria?"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                placeholderTextColor="#C1BCCC"
                style={styles.input}
                placeholder="Qual o dia?"
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                placeholderTextColor="#C1BCCC"
                style={styles.input}
                placeholder="Qual a hora?"
              />
            </View>
          </View>
        </View>
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}