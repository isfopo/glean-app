// import { SocialConnections } from '@/components/social-connections';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import * as React from 'react';
import { Pressable, View, Linking } from 'react-native';

export function SignInForm({
  onSubmit,
  onSignUp,
}: {
  onSubmit: (data: any) => Promise<void>;
  onSignUp: () => void;
}) {
  const [handle, setHandle] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    try {
      await onSubmit({
        handle,
        password,
      });
    } catch (error) {
      console.error('Sign In failed:', error);
    }
  };

  return (
    <View className="gap-6">
      <Card className="border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-center text-xl sm:text-left">
            Sign in to Glean
          </CardTitle>
          <CardDescription className="text-center sm:text-left">
            Welcome back! Please sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
          <View className="gap-6">
            <View className="gap-1.5">
              <Label htmlFor="handle">Handle</Label>
              <Input
                id="handle"
                placeholder="alice.bsky.social"
                keyboardType="url"
                autoCapitalize="none"
                onChangeText={text => setHandle(text)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
              />
            </View>
            <View className="gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
              />
            </View>
            <Button className="w-full" onPress={handleSubmit}>
              <Text>Sign In</Text>
            </Button>
          </View>
          <View>
            <Text className="text-center text-sm">
              Don&apos;t have an account?{' '}
            </Text>
            <Pressable onPress={onSignUp}>
              <Text className="text-sm text-center underline underline-offset-4">
                Sign up on Bluesky
              </Text>
            </Pressable>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
