import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 8,
  },
  label: {
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular'
  },
  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 10
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBlock: {
    width: '47%'
  }
})

export default styles