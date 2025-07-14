'use client'

import { Box, Button, Flex, Input, Heading } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'

export default function LoginPage() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
    >
      <Box
        p={8}
        rounded="xl"
        shadow="lg"
        w="full"
        maxW="md"
      >
        <Heading
          mb={6}
          size="lg"
          textAlign="center"
        >
          ログイン
        </Heading>

        <FormControl
          id="email"
          mb={4}
        >
          <FormLabel>メールアドレス</FormLabel>
          <Input
            type="email"
            placeholder="you@example.com"
          />
        </FormControl>

        <FormControl
          id="password"
          mb={6}
        >
          <FormLabel>パスワード</FormLabel>
          <Input
            type="password"
            placeholder="●●●●●●"
          />
        </FormControl>

        <Button
          colorScheme="blue"
          size="md"
          w="full"
        >
          ログイン
        </Button>
      </Box>
    </Flex>
  )
}
