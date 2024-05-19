import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
let ScreenHeight = Dimensions.get('window').height;

export default function RandomColorGenerator() {
  const [randomBGColor, setRandomBGColor] = useState('#ffffff');
  const [randomCircleColor, setRandomCircleColor] = useState('#9F8170');
  const [randomBrickColor, setRandomBrickColor] = useState('#E5C6CE');

  const generateColor = () => {
    let bgColor = '#';
    let circleColor = '#';
    let brickColor = '#';
    const hexColor = '123456789ABCDEF';

    for (let index = 0; index < 6; index++) {
      bgColor += hexColor[Math.floor(Math.random() * 16)];
      circleColor += hexColor[Math.floor(Math.random() * 16)];
      brickColor += hexColor[Math.floor(Math.random() * 16)];
    }
    setRandomBGColor(bgColor);
    setRandomCircleColor(circleColor);
    setRandomBrickColor(brickColor);
  };

  return (
    <View style={[styles.container, {backgroundColor: randomBGColor}]}>
      <View style={styles.section}>
        <View style={[styles.circle, {backgroundColor: randomCircleColor}]} />

        <TouchableOpacity style={styles.btn} onPress={generateColor}>
          <Text style={styles.btnTxt}>Press It</Text>
        </TouchableOpacity>

        <View style={[styles.brick, {backgroundColor: randomBrickColor}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
  },
  section: {flex: 1, justifyContent: 'space-evenly', alignItems: 'center'},
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'teal',
    borderRadius: 6,
  },

  btnTxt: {
    color: 'white',
    fontSize: 18,
  },

  circle: {
    height: 80,
    width: 80,
    backgroundColor: 'purple',
    borderRadius: 50,
  },

  brick: {
    height: 80,
    width: 80,
    backgroundColor: 'coral',
  },
});
