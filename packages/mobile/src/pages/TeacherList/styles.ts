import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },
  teacherList: {
    marginTop: -36,
  },
  searchForm: {
    marginBottom: 18,
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
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#04D361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }
})

export default styles