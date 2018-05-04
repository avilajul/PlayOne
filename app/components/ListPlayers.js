import React from 'react'
import 
{ 
    TouchableOpacity, 
    View, 
    FlatList, 
    Text, 
    Image,
    StyleSheet
} from 'react-native'


// URL donde se encuentra alojada la lista de datos de los jugadores
const List = 'https://www.jasonbase.com/things/6zoj.json'

/**
 * Clase que se que contiene la vista con la lista de jugadores de la aplicación
 * hereda de el componente PureComponent
 */
class ListPlayers extends React.PureComponent 
{
    // contendrá el arreglo de los datos de los jugadores
    state = { data: [] }

    //Detalles de la barra de navegación
    static navigationOptions = 
    {
        title: 'Play One',
        headerStyle: {
            backgroundColor: '#311b92',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {                        
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            flex:1,
        }
    };
    
    /**
     *  Método asíncrono que realiza petición a la API donde se encuentra alojada
     * obteniendo como respuesta con estructura de dato JSON
     */
    async componentDidMount() 
    {
        const res = await fetch(`${List}`)
        const resJson = await res.json()        
        this.setState({data: resJson})
    }

     /**
      * Este método carga cada item del listado de jugadores
      * recibe como parametro el item el cual retorna en un contenedor
      * con  las propiedades que contiene cada item.
      */
    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity 
               // evento que se activa al presionar sobre el contenedor de un item
               //el cual envia el item como parametro al método onPlayerPress 
              onPress = {()=>this._onPlayerPress(item)}    
              style = {styles.renderItem}>
                
                <Image style = {styles.playerPhoto} source = {{uri: `${item.photo}`}} >
                </Image>                
                <Text style = {styles.textName}> 
                  {item.name}
                </Text>
                <Text style={styles.textAge}>
                  Edad: <Text>{item.age}</Text>
                </Text>
            </TouchableOpacity>
        )
    }

    /**
     * Este método recibe como parametro el item que contiene los datalles del jugador
     * y se encarga de ser enviado dicha información a la vista DetailsPlayer.
     */
    _onPlayerPress = (item) => {
        this.props.navigation.navigate('DetailsPlayer', {player: item})
    } 


    /**
     * Método que carga en el componente FlatList el listado de jugadores de la aplicación
     */
    render() {
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={()=>
                    <View style={styles.viewRender} 
                />}
            />
        )
    }
}

/**
 * Estilos para los contenedores y componentes.
 */
var styles = StyleSheet.create({
    renderItem: {        
        justifyContent: 'center',  
        alignItems: "center", 
        backgroundColor: 'white', 
        borderColor: 'white', 
        borderWidth: 1, 
        marginBottom: 2
    },
    playerPhoto: {
        height: 150, width: 100 + '%'
    },
    textName: {
        fontSize: 20, fontWeight: 'bold'
    },
    textAge: {
        color:'grey', fontSize: 14
    },
    viewRender: {
        height:2, backgroundColor: '#fff'
    }
});

// Exportación de la clase ListPlayers
module.exports = ListPlayers;