import React from 'react';
import { View, ScrollView } from 'react-native';
import { useAuthStore } from '../store/auth';
import { SignInForm } from '../components/sign-in-form';

const SignInScreen = ({ navigation }: any) => {
  const { signIn } = useAuthStore();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password screen
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
      keyboardDismissMode="interactive"
    >
      <View className="w-full max-w-sm">
        <SignInForm
          onSubmit={signIn}
          onSignUp={handleSignUp}
          onForgotPassword={handleForgotPassword}
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
