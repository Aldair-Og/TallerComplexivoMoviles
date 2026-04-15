import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaScreen from '../screens/ListaScreen';
import GuardarScreen from '../screens/GuardarScreen';
import NotasScreen from '../screens/NotasScreen';
import { NavigationContainer } from '@react-navigation/native';
import InformacionScreen from '../screens/InformacionScreen';






const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}





const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Peliculas" component={ListaScreen} />
      <Drawer.Screen name="Guardar" component={GuardarScreen} />
      <Drawer.Screen name="Notas" component={NotasScreen} />
      <Drawer.Screen name="Informacion" component={InformacionScreen} />


    </Drawer.Navigator>
  );
}

export function Navegador(){

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

}

