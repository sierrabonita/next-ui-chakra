'use client'

import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Box p={8}>
      <Heading mb={4}>Hello, Chakra UI with App Router</Heading>
      <Text mb={4}>このアプリは App Router + Chakra UI です。</Text>
      <Button colorScheme="teal">ボタン</Button>
    </Box>
  )
}
