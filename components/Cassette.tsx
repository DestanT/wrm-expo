import { StyleSheet, ImageBackground, ViewStyle, Platform, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import NaturalText from './NaturalText';

type CassetteProps = {
  title: string;
  style?: ViewStyle | null;
  id: string | number; // NOTE: Update this once API is ready
};

export default function Cassette({ title, style, id }: CassetteProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/playlist/${id}`);
  };

  const imageStyle =
    Platform.OS === 'web' ? { ...styles.web, ...style } : { ...styles.mobile, ...style };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, imageStyle]}
    >
      <ImageBackground
        source={require('@/assets/images/cassette.png')}
        style={imageStyle}
        resizeMode='center'
      >
        <NaturalText text={title} />
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  web: {
    height: 200,
    width: '100%',
    paddingBottom: 220,
  },
  mobile: {
    height: 300,
    width: '100%',
  },
});
