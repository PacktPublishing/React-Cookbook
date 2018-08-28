import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 50
  },
  list: {
    flex: 1
  },
  header: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  headerText: {
    color: 'white'
  },
  inputText: {
    color: '#666',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1480D6'
  },
  submitText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  task1: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5
  },
  task2: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5
  },
  delete: {
    margin: 10,
    fontSize: 15
  },
  noTasks: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noTasksText: {
    color: '#888'
  }
});
