'use client'

import { Box, Flex, Heading, Link } from '@chakra-ui/react'

export default function TopPage() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
    >
      <Box
        p={8}
        shadow="lg"
        w="xl"
        minH={'30vh'}
      >
        <Heading
          justifySelf={'center'}
          textAlign={'center'}
          size={'3xl'}
        >
          next-chakra-ui
        </Heading>
        <Link href="/loginForm">loginForm</Link>
      </Box>
    </Flex>
  )
}
