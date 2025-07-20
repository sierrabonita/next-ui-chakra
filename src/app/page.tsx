'use client'

import { Flex, Link } from '@chakra-ui/react'

export default function TopPage() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
    >
      <Link href="/loginForm">loginForm</Link>
    </Flex>
  )
}
