import { StyleSheet, Text, View, Platform } from 'react-native';

type NaturalTextProps = {
  text: string;
};

export default function NaturalText({ text }: NaturalTextProps) {
  const titlePosition =
    text.length > 19
      ? Platform.OS === 'web'
        ? styles.webLongTitlePosition
        : styles.mobileLongTitlePosition
      : Platform.OS === 'web'
        ? styles.webTitlePosition
        : styles.mobileTitlePosition;

  const titleStyle =
    text.length > 19
      ? Platform.OS === 'web'
        ? styles.webLongTitle
        : styles.mobileLongTitle
      : Platform.OS === 'web'
        ? styles.webTitle
        : styles.mobileTitle;

  return (
    <View style={titlePosition}>
      <Text style={titleStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Web styles
  webTitlePosition: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  webLongTitlePosition: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  webTitle: {
    fontFamily: 'IndieFlower',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 24,
    color: 'black',
    textAlign: 'center',
    transform: [{ rotate: '-3deg' }],
  },
  webLongTitle: {
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
  // Mobile styles
  mobileTitlePosition: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  mobileLongTitlePosition: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  mobileTitle: {
    fontFamily: 'IndieFlower', // BUG: Currently not working on android
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    transform: [{ rotate: '-3deg' }],
  },
  mobileLongTitle: {
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
