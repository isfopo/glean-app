import { SocialConnections } from '@/components/social-connections';
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
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import * as React from 'react';
import { Pressable, View } from 'react-native';

export function SignInForm({
  onSubmit,
  onSignUp,
}: {
  onSubmit: (data: any) => void;
  onSignUp: () => void;
}) {
  const [handle, setHandle] = React.useState('');

  const handleSubmit = () => {
    onSubmit({
      identifier: handle,
    });
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
            <Button className="w-full" onPress={handleSubmit}>
              <Text>Continue</Text>
            </Button>
          </View>
          <Text className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Pressable onPress={onSignUp}>
              <Text className="text-sm underline underline-offset-4">
                Sign up
              </Text>
            </Pressable>
          </Text>
          <View className="flex-row items-center">
            <Separator className="flex-1" />
            <Text className="text-muted-foreground px-4 text-sm">or</Text>
            <Separator className="flex-1" />
          </View>
          <SocialConnections />
        </CardContent>
      </Card>
    </View>
  );
}
