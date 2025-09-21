import React from 'react';
import { View, ScrollView } from 'react-native';
import { useAuthStore } from '../store/auth';
import { SignUpForm } from '../components/sign-up-form';

const SignUpScreen = ({ navigation }: any) => {
  const { signUp } = useAuthStore();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
      keyboardDismissMode="interactive"
    >
      <View className="w-full max-w-sm">
        <SignUpForm onSubmit={signUp} onSignIn={handleSignIn} />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
