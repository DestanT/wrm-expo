import { Platform, StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Cassette from '@/components/Cassette';

export default function PlaylistDetailScreen() {
  const { id } = useLocalSearchParams();
  const isWeb = Platform.OS === 'web';
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <View style={isWeb ? styles.webContainer : styles.mobileContainer}>
        <Cassette
          id={id as string}
          title={`This is the playlist with id ${id}!`}
          style={isWeb ? styles.webCassette : null}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 750, // Same as the width of the ParallaxScrollView component
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  mobileContainer: {
    flex: 1,
  },
  webCassette: {
    flexBasis: '50%',
  },
});
