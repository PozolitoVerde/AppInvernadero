import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import { stilos } from "./stilos";
import { LineChart } from 'react-native-chart-kit'



//FUNCION PARA REFRESCAR BOTON
function RefreshButton({ onPress }) {
  return (
    //ESTILOS DE BOTON PARA REFRESCAR Y FUNCIONAMIENTO
    <View
      style={{
        marginVertical: 10,
        backgroundColor: "blue",
        padding: 20,
        marginRight: 50,
        borderRadius: 15,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: "white",
            textDecorationLine: "underline",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Refrescar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// CONSTANTE DE DATOS DE LA GRAFICA DE PUNTOS (X, Y)
const data = {
  labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
  datasets: [{
    data: [20, 35, 28, 30, 29, 23, 25]
  }]
}
//CONFIGURACION DE LA GRAFICA DE PUNTOS
const chartConfig = {
  backgroundGradientFrom: '#F2F3F4',
  backgroundGradientTo: '#F2F3F4',
  color: (opacity = 1) => `rgba(15, 59, 0, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}


//FUNCION PRINCIPAL DE DIA
function Dia({ navigation }) {
  obtenerDato();
  useEffect(() => {}, []);

  //CONSTANTE DEL USESTATE PARA OBTENER LOS DATOS
  const [mediciones, setDatos] = useState([]);
  //ASYNC SE UTILIZA PARA OBTENER LOS DATOS MEDIANTE EL METODO GET
  async function obtenerDato() {
    //ENDPOINT, BUSCA UNA RESPUESTA
    const res = await fetch("https://backend-vf-12.vercel.app/api/ultimo");
    const dato = await res.json();
    setDatos(dato);
  }

  //DECLARACION DE LA VARIABLE DE REFRESH
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    // LOGICA DE REFRESCADO EN LA PAGINA
    setTimeout(() => {
      setRefreshing(false); //EN CASO DE PASAR EL TIEMPO DE 2 SEGUNDOS SE DEJA DE REFRESCAR
    }, 2000); // espera 2 segundos para indicar que la actualización ha finalizado
  };
  return (
    <View style={stilos.contenedor}>
    <StatusBar backgroundColor="#279A00" barStyle="light-content" />
      <View>
        <FlatList
          data={mediciones}
          renderItem={({ item }) => (
            <View style={stilos.medidores}>
              <View style={stilos.head}>
                <Text style={stilos.tittle}> Cultive Care Technologies </Text>
                <Image
                  source={require("../../img/cultivecare2.png")}
                  style={stilos.img3}
                />
                        <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 0.7,
                  marginVertical: 10,
                  marginBottom: 0,
                }}
              />
                <Image
                  source={require("../../img/logo2.png")}
                  style={stilos.img}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 0.7,
                  marginVertical: -50,
                  marginBottom: 75,
                }}
              />

              <Text style={stilos.fechayhora}>Fecha: {item.Date}</Text>
              <View style={stilos.tarjetasChart}>
                <View style={stilos.medidor}>
                  <Text style={stilos.textomedidor}>Media de Temperatura (C°) diaria </Text>
                  <Text style={stilos.textomedidor2}>
                    {item.Temperatura} C°
                  </Text>
                    <LineChart
                      data={data}
                      width={395} // Ancho de la ventana
                      height={220}
                      chartConfig={chartConfig}
                    />

                 
                </View>
              </View>
              <View style={stilos.tarjetas}>
                <View style={stilos.medidor}>
                  <Text style={stilos.textomedidor}>Promedio de temperatura del dia</Text>
                  <Text style={stilos.textomedidor2}>
                    {item.Humedad_cultivo_2} C°
                  </Text>
                  <CircularProgress
                    size={200}
                    width={20}
                    fill={item.Humedad_cultivo_2}
                    tintColor="indigo"
                    backgroundColor="#fff"
                    rotation={-90}
                    lineCap="round
                    "
                  />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(i) => i.toString()}
        />
      </View>
    </View>
  );
}
export default Dia;
