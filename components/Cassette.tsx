import { StyleSheet, ImageBackground, ViewStyle, Platform } from 'react-native';
import NaturalText from './NaturalText';

type CassetteProps = {
  title: string;
  style?: ViewStyle;
};

export default function Cassette({ title, style }: CassetteProps) {
  const imageStyle =
    Platform.OS === 'web' ? { ...styles.web, ...style } : { ...styles.mobile, ...style };

  return (
    <ImageBackground
      source={require('@/assets/images/cassette.png')}
      style={imageStyle}
      resizeMode='center'
    >
      <NaturalText text={title} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  web: {
    height: 200,
    width: '100%',
  },
  mobile: {
    height: 300,
    width: '100%',
  },
});
