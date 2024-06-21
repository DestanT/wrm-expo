import { router } from 'expo-router';
import { View } from 'react-native';

import { useSession } from '@/contexts/AuthContext';
import Button from '@/components/sample-components/Button';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        theme='primary'
        label='Sign In'
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}
      />
    </View>
  );
}
