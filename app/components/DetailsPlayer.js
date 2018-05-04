import React, 
{ 
    Component 
} from 'react'

import 
{ 
    ScrollView, 
    Image,     
    Text,
    StyleSheet, 
} from 'react-native'


/**
 * Clase en la cual se visualizará
 * las caracteristicas detalladas de un jugador
 */
 class DetailsPlayer extends Component 
{    
    // Detalles de la barra de navegación
    static navigationOptions = 
    {
        title: 'Detalles del Jugador',
        headerStyle: {
            backgroundColor: '#311b92',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {            
            textAlign: 'center',            
            fontWeight: 'bold',
            fontSize: 20,
            flex:1
        }
    };

    /**
     * Método que carga en componente ScrollView
     * las caracteristicas detalladas del jugador que fueron enviadas
     * por medio de la función _onPlayerPress en la clase ListPlayers
     */
    render() 
    {       
        const { player } = this.props.navigation.state.params
        return (
           <ScrollView>
               <Image 
                    source={{uri: `${player.photo}`}} 
                    style={styles.playerPhoto}
                />
                <Text style={styles.textName}>{player.name}</Text>
                <Text style={styles.textAge}>Edad: 
                    <Text style={styles.playerAge}> {player.age}</Text>
                </Text>                
                <Text style={styles.textWeight}>Peso: 
                    <Text style={styles.playerWeight}> {player.weight}</Text>
                </Text>
                <Text style={styles.textHeight}>Altura: 
                    <Text style={styles.playerHeight}> {player.height}</Text>
                </Text>
                <Text style={styles.textProfession}>Profesión: 
                <Text style={styles.playerProfession}> {player.profession}{"\n"}</Text>
                </Text>
           </ScrollView> 
        )
    }
}

/**
 * Estilos para los componentes.
 */
var styles = StyleSheet.create({
    playerPhoto: {
        width:100 +'%', height:300
    },
    textName: {
        padding:10, fontSize:25, textAlign:'center', fontWeight: 'bold'
    },
    textAge: {
        marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20
    },
    playerAge: {
        fontWeight:'normal', fontSize:15
    },
    textWeight: {
        marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20
    },
    playerWeight: {
        fontWeight:'normal', fontSize:15
    },
    textHeight: {
        marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20
    },
    playerHeight: {
        fontWeight:'normal', fontSize:15
    },
    textProfession: {
        marginLeft: 10, padding:5, fontWeight:'bold', fontSize:20
    },
    playerProfession: {
        fontWeight:'normal', fontSize:15
    }
});

// Exportación de la clase DetailsPlayer
module.exports = DetailsPlayer;