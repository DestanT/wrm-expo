import { View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import CustomTabController from '@/components/CustomTabController';

const tabs = [
  {
    label: 'First',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>First Page</Text>
      </View>
    ),
  },
  {
    label: 'Second',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Second Page</Text>
      </View>
    ),
  },
  {
    label: 'Third',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Third Page</Text>
      </View>
    ),
  },
  {
    label: 'Fourth',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Fourth Page</Text>
      </View>
    ),
  },
  {
    label: 'Fifth',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Fifth Page</Text>
      </View>
    ),
  },
  {
    label: 'Sixth',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sixth Page</Text>
      </View>
    ),
  },
  {
    label: 'Seventh',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Seventh Page</Text>
      </View>
    ),
  },
  {
    label: 'Eighth',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Eighth Page</Text>
      </View>
    ),
  },
  {
    label: 'Ninth',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ninth Page</Text>
      </View>
    ),
  },
  {
    label: 'Tenth',
    content: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tenth Page</Text>
      </View>
    ),
  },
];

export default function SeasonScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <CustomTabController tabs={tabs} />
    </ParallaxScrollView>
  );
}
