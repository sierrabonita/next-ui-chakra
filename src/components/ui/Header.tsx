'use client'

import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router = useRouter()
  return (
    <Box
      as="header"
      bg="gray.100"
      color="gray.800"
      p={4}
      boxShadow="md"
    >
      <Flex
        w={'full'}
        align={'center'}
      >
        <Heading>next-chakra-ui</Heading>
        <Spacer />
        <Button
          onClick={() => router.push('/')}
          size={'sm'}
          variant={'outline'}
        >
          Top
        </Button>
      </Flex>
    </Box>
  )
}

export default Header
