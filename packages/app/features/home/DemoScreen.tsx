import { Button, Stack } from '@my/ui'
import { ScrollView } from 'react-native'

const DemoScreen = () => {
  return (
    <Stack flex={1} gap="$2">
      <Stack>The ScrollView below doesn't show</Stack>
      <ScrollView>
        <Button>Do you see me?</Button>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
        <Stack>Test</Stack>
      </ScrollView>
      <Button bg="$blue10Light">Button</Button>
    </Stack>
  )
}

export default DemoScreen
