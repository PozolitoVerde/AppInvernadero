import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import { stilos } from "./stilos";
import { SimpleLineIcons } from "@expo/vector-icons";

function RefreshButton({ onPress }) {
  return (
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
        <SimpleLineIcons
          name="refresh"
          size={30}
          color="white"
          style={{ textAlign: "center", marginTop: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function Medidores() {
  obtenerDato();
  useEffect(() => {}, []);

  const [mediciones, setDatos] = useState([]);
  async function obtenerDato() {
    const res = await fetch("https://backend-vf-12.vercel.app/api/ultimo");
    const dato = await res.json();
    setDatos(dato);
  }
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // aquí puedes agregar cualquier lógica para actualizar la página
    setTimeout(() => {
      setRefreshing(false);
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

              <Text style={stilos.hora}>Hora: {item.Hour} </Text>
              <Text style={stilos.fechayhora}>Fecha: {item.Date}</Text>
              <View style={stilos.tarjetas}>
                <View style={stilos.medidor}>
                  <Text style={stilos.textomedidor}>Temperatura</Text>
                  <Text style={stilos.textomedidor2}>
                    {item.Temperatura} C°
                  </Text>
                  <CircularProgress
                    size={200}
                    width={20}
                    fill={item.Temperatura}
                    tintColor="red"
                    backgroundColor="#fff"
                    rotation={-90}
                    lineCap="round"
                  />
                </View>
              </View>

              <View style={stilos.tarjetas2}>
                <View style={stilos.medidor}>
                  <Text style={stilos.textomedidor}>Humedad Atmosferica</Text>
                  <Text style={stilos.textomedidor2}>{item.Humedad_atm}%</Text>
                  <CircularProgress
                    size={200}
                    width={20}
                    fill={item.Humedad_atm}
                    tintColor="#00e0ff"
                    backgroundColor="#fff"
                    rotation={-90}
                    lineCap="round"
                  />
                </View>
              </View>
              <View style={stilos.tarjetas}>
                <View style={stilos.medidor}>
                  <Text style={stilos.textomedidor}>Humedad Cultivo 1</Text>
                  <Text style={stilos.textomedidor2}>
                    {item.Humedad_cultivo_1}%
                  </Text>
                  <CircularProgress
                    size={200}
                    width={20}
                    fill={item.Humedad_cultivo_1}
                    tintColor="green"
                    backgroundColor="#fff"
                    rotation={-90}
                    lineCap="round"
                  />
                </View>
              </View>
              <View style={stilos.tarjetas2}>
                <View style={stilos.medidor}>
                  <Text style={stilos.textomedidor}>Humedad Cultivo 2</Text>
                  <Text style={stilos.textomedidor2}>
                    {item.Humedad_cultivo_2}%
                  </Text>
                  <CircularProgress
                    size={200}
                    width={20}
                    fill={item.Humedad_cultivo_2}
                    tintColor="indigo"
                    backgroundColor="#fff"
                    rotation={-90}
                    lineCap="round"
                  />
                </View>
              </View>
              <View style={stilos.boton}>
                {refreshing ? (
                  <Text>Actualizando...</Text>
                ) : (
                  <RefreshButton onPress={handleRefresh} />
                )}
                {/* aquí va el resto del contenido de tu aplicación */}
              </View>
            </View>
          )}
          keyExtractor={(i) => i.toString()}
        />
      </View>
    </View>
  );
}
export default Medidores;
