import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';




import NewAssistance from '../screens/NewAssistance';
import General from '../screens/General';

import Admin from '../screens/Admin';
import Account from '../screens/Account';
import Principal from '../screens/Principal';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
         <Tab.Screen
          name="administrador"   
          component={Admin}   
          options ={{title: "Administrador"  }}
        />
         <Tab.Screen
          name="account"  // Este es el nombre de la pestaña
          component={Account} // Llama a AccountStack aquí
          options={{ title: "Cuenta" }} // Este es el título que verás en la pestaña
        />
        <Tab.Screen
          name="inicio"   
          component={Principal}   
         
          options ={{title:"Inicio"
          }}
        /> 
         <Tab.Screen
          name="nueva Asistencia"   
          component={NewAssistance}   
          options ={{title:"Nueva Asistencia"}}
        />
         <Tab.Screen
          name="general"   
          component={General}   
          options ={{title: "General"}}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
