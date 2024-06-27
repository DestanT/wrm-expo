import { ReactNode } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabController } from 'react-native-ui-lib';
import { useThemeColor } from '@/hooks/useThemeColor';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

interface Tab {
  label: string;
  content: ReactNode;
}

interface CustomTabControllerProps {
  tabs: Tab[];
}

const CustomTabController: React.FC<CustomTabControllerProps> = ({ tabs }) => {
  const color = useThemeColor({ light: '#a49a81', dark: '#1a1a1a' }, 'text');
  const { width } = useWindowDimensions();
  const isWeb = width > 750;
  const tabBarWidth = isWeb ? 750 : width;
  const indicatorWidth = tabBarWidth / tabs.length;

  return (
    <TabController items={tabs.map((tab) => ({ label: tab.label }))}>
      <TabController.TabBar
        centerSelected={true}
        enableShadow={true}
        containerWidth={tabBarWidth}
        indicatorWidth={indicatorWidth}
        backgroundColor={color}
        activeBackgroundColor={color === '#a49a81' ? '#1a1a1a' : '#a49a81'}
        spreadItems={true}
        uppercase={true}
        labelColor={color === '#a49a81' ? '#1a1a1a' : '#a49a81'}
        selectedLabelColor={color === '#a49a81' ? '#1a1a1a' : '#a49a81'}
        selectedIconColor={color === '#a49a81' ? '#a49a81' : '#1a1a1a'}
      />
      <View>
        {tabs.map((tab, index) => (
          <TabController.TabPage key={index} index={index}>
            {tab.content}
          </TabController.TabPage>
        ))}
      </View>
    </TabController>
  );
};

// export default gestureHandlerRootHOC(CustomTabController); // NOTE: Re-check this in production
export default CustomTabController;
