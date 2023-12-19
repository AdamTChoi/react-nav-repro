import { YStack } from '@my/ui'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NestedScreen from './NestedScreen'

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
            name="nestedscreen"
            component={NestedScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </YStack>
  )
}
