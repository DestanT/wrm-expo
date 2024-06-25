import { StyleSheet, Text, View, Platform } from 'react-native';

type NaturalTextProps = {
  text: string;
};

export default function NaturalText({ text }: NaturalTextProps) {
  const titlePosition =
    text.length > 19
      ? Platform.OS === 'web'
        ? styles.longTitlePositionWeb
        : styles.longTitlePositionMobile
      : Platform.OS === 'web'
        ? styles.titlePositionWeb
        : styles.titlePositionMobile;

  const titleStyle =
    text.length > 19
      ? Platform.OS === 'web'
        ? styles.longTitleWeb
        : styles.longTitleMobile
      : Platform.OS === 'web'
        ? styles.titleWeb
        : styles.titleMobile;

  return (
    <View style={titlePosition}>
      <Text style={titleStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titlePositionWeb: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  longTitlePositionWeb: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  titleWeb: {
    fontFamily: 'IndieFlower',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 24,
    color: 'black',
    textAlign: 'center',
    transform: [{ rotate: '-3deg' }],
  },
  longTitleWeb: {
    fontFamily: 'IndieFlower',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 24,
    color: 'black',
    textAlign: 'center',
    transform: [{ rotate: '-2deg' }],
    width: '80%',
    flexWrap: 'wrap',
  },
  titlePositionMobile: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  longTitlePositionMobile: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  titleMobile: {
    fontFamily: 'IndieFlower', // BUG: Currently not working on android
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    transform: [{ rotate: '-3deg' }],
  },
  longTitleMobile: {
    fontFamily: 'IndieFlower', // BUG: Currently not working on android
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
    color: 'black',
    textAlign: 'center',
    transform: [{ rotate: '-2deg' }],
    width: '70%',
    flexWrap: 'wrap',
  },
});
