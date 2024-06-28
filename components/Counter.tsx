import { View, Text, Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type CounterProps = {
  inputText: string;
};

export default function Counter({ inputText }: CounterProps) {
  // Ensure at least 2 characters are displayed
  if (inputText.length < 2) {
    inputText = '0' + inputText;
  }

  // Platform specific styles
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  const boxStyle = isMobile ? styles.mobileBox : styles.box;
  const textStyle = isMobile ? styles.mobileText : styles.text;
  const borderStyle = isMobile ? styles.mobileOuterBoxBorder : styles.webOuterBoxBorder;

  return (
    // Container
    <View style={styles.container}>
      {/* Outer most border */}
      <View style={styles.outerBorder}>
        {/* Inner border */}
        <View style={styles.innerBorder}>
          {/* inputText split into characters */}
          {inputText.split('').map((char, index) => (
            // Gradient background for each box
            <LinearGradient
              key={index}
              colors={[
                '#303030', // Dark
                '#a8a5a3', // Highlight
                '#7d7875', // Light
                '#303030', // Dark
                '#303030', // Dark
                '#262626', // Darkest
                '#303030', // Dark
                '#7d7875', // Light
                '#303030',
              ]}
              style={{ ...boxStyle, ...borderStyle }}
            >
              {/* Character */}
              <Text style={textStyle}>{char}</Text>
            </LinearGradient>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerBorder: {
    borderWidth: 4,
    borderColor: '#2e2d2c',
    borderRadius: 12,
    backgroundColor: '#242424',
  },
  innerBorder: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopColor: '#1d1d1d',
    borderBottomColor: '#1d1d1d',
    borderLeftColor: '#1d1d1d',
    borderRightColor: '#1d1d1d',
    borderRadius: 10,
  },
  webOuterBoxBorder: {
    margin: 2,
    borderRadius: 5,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopColor: '#1d1d1d',
    borderBottomColor: '#1d1d1d',
    borderLeftColor: '#a8a5a3',
    borderRightColor: '#a8a5a3',
  },
  mobileOuterBoxBorder: {
    margin: 2,
    borderRadius: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftColor: '#a8a5a3',
    borderRightColor: '#a8a5a3',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  box: {
    width: 24,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileBox: {
    width: 21,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontFamily: 'mono',
    fontWeight: 'bold',
    color: '#e8e8e7',
    opacity: 0.85,
  },
  mobileText: {
    fontSize: 20,
    fontFamily: '',
    fontWeight: '900',
    color: '#e8e8e7',
  },
});
