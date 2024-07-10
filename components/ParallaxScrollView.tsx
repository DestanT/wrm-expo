import type { PropsWithChildren } from 'react';
import { ImageBackground, StyleSheet, useColorScheme, Platform } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { Avatar } from 'react-native-ui-lib';
import Counter from './Counter';

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
  const headerImageStyle = Platform.OS === 'web' ? styles.webHeaderImage : styles.mobileHeaderImage;

  // Centers the content on web and full width on mobile.
  const contentStyle = Platform.OS === 'web' ? styles.webContentStyle : styles.mobileContentStyle;

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
          >
            <Avatar
              source={{
                uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
              }}
              size={100}
            />
            <Counter inputText='1' />
          </ImageBackground>
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
  webHeaderImage: {
    width: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mobileHeaderImage: {
    width: '100%',
    height: '100%',
  },
  webContentStyle: {
    width: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 16,
  },
  mobileContentStyle: {
    flex: 1,
    gap: 16,
    overflow: 'hidden',
  },
});
