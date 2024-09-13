import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={["#FEB054", "#FEA14E"]} style={styles.gradient}>
      <View style={styles.container}>


        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => alert('Search Button Pressed')}>
            <Image source={require('./assets/search.png')} style={styles.searchIcon} />
          </TouchableOpacity>


          <Image source={require('./assets/point.png')} style={styles.pointIcon} resizeMode="contain" />

          <TouchableOpacity onPress={() => alert('Nav Bar Button Pressed')}>
            <Image source={require('./assets/nav-bar.png')} style={styles.navBarIcon} />
          </TouchableOpacity>
        </View>
        
        <View>
          <Text>Stockholm, Sweden</Text>
          <Text>Tue, Jun 30</Text>

        </View>

        <View style={styles.container}>
          <Image source={require('./assets/cloudy.png')} style={styles.weatherIcon} />
          <Text>19 °C</Text>
          <Text>Rainy</Text>
        </View>
        

          <View style={styles.weatherInformations}>
            <View style={styles.weatherInformationsContent}>
              <Image source={require('./assets/umbrella.png')} style={{ width: 30, height: 30 }} />
              <Text>RainFall</Text>

            </View>
            <Text>3cm</Text>
          </View>

          <View style={styles.weatherInformations}>
            <View style={styles.weatherInformationsContent}>
              <Image source={require('./assets/vector.png')} style={{ width: 30, height: 30 }} />
              <Text>Wind</Text>

            </View>
            <Text>19km/h/</Text>
          </View>

          <View style={styles.weatherInformations}>
            <View style={styles.weatherInformationsContent}>
              <Image source={require('./assets/water.png')} style={{ width: 30, height: 30 }} />
              <Text>Humidity</Text>

            </View>
            <Text>64%</Text>
          </View>

        
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherIcon: {
    width: 200, 
    height: 200,
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    paddingHorizontal: 20, 
    marginTop: 50, 
  },
  searchIcon: {
    width: 25, 
    height: 25,
  },
  pointIcon: {
    width: 135, 
    height: 10,
  },
  navBarIcon: {
    width: 25, 
    height: 25,
  },
  weatherInformations: {
    backgroundColor: "#FFFFFF",
    padding: 10, 
    borderRadius: 10,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
  },
  weatherInformationsContent: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
