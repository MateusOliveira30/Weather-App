import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={["#FEB054", "#FEA14E"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text>Stockholm, Sweden</Text>
        <Text>Tue, Jun 30</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Image source={require('./assets/cloudy.png')} style={{ width: 100, height: 100 }} />
        <Text>19 °C</Text>
        <Text>Rainy</Text>
      </View>
      <View>
        <View>
          <View>
            <Image source={require('./assets/umbrella.png')} style={{ width: 30, height: 30 }} />
            <Text>RainFall</Text>

          </View>
          <Text>3cm</Text>
        </View>
        <View>
          <View>
            <Image source={require('./assets/vector.png')} style={{ width: 30, height: 30 }} />
            <Text>Wind</Text>

          </View>
          <Text>19km/h/</Text>
        </View>
        <View style={{backgroundColor: "FFFFF"}}>
          <View>
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
});
