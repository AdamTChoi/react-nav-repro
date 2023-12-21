import { YStack } from '@my/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DemoScreen from './DemoScreen'

const Stack = createNativeStackNavigator()

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <NavigationDemo />
    </YStack>
  )
}

function NavigationDemo() {
  return (
    <YStack>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="demoscreen"
            component={DemoScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </YStack>
  )
}
