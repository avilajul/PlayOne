import React from 'react'

// importación de la pila de navegación para aplicación
import 
{ 
    StackNavigator 
} from 'react-navigation'

/*
  importación de las clases ListPlayers y DetailsPlayer
  para que sean instanciadas en la pila de navegación
*/
import ListPlayers from './app/components/ListPlayers'
import DetailsPlayer from './app/components/DetailsPlayer'


// Definición de la pila de navegación entre las vistas listado de jugadores y detalles de jugador
const App = StackNavigator(
{
  ListPlayers: 
  {
    screen: ListPlayers 
  },

  DetailsPlayer: 
  {
    screen: DetailsPlayer 
  },
})

export default App
