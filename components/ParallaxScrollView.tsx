import type { PropsWithChildren } from 'react';
import { ImageBackground, StyleSheet, useColorScheme, Platform } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({ children, headerBackgroundColor }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  // Displays the cassette image centered on web and full width on mobile.
  const headerImageStyle = Platform.OS === 'web' ? styles.headerImageWeb : styles.headerImageMobile;

  // Centers the content on web and full width on mobile.
  const contentStyle = Platform.OS === 'web' ? styles.contentStyleWeb : styles.contentStyleMobile;

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          <ImageBackground
            source={require('@/assets/images/cassette-player-top.png')}
            style={headerImageStyle}
            resizeMode='cover'
          ></ImageBackground>
        </Animated.View>
        <ThemedView style={contentStyle}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  headerImageWeb: {
    width: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerImageMobile: {
    width: '100%',
    height: '100%',
  },
  contentStyleWeb: {
    flex: 1,
    width: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  contentStyleMobile: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
