import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskInputField from './components/actions/TaskInputField'
import TaskItem from './components/detailTask/TaskItem'
import screen from './components/screen'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="App Todo-List" component={screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;