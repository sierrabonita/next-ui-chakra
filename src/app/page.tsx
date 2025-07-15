'use client'

import {
  Button,
  Box,
  Field,
  Fieldset,
  Flex,
  Input,
  VStack,
} from '@chakra-ui/react'

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
        <Fieldset.Root
          size="lg"
          maxW="md"
        >
          <VStack align={'flex-start'}>
            <Fieldset.Legend>ログイン</Fieldset.Legend>
            <Fieldset.HelperText>
              メールアドレスとパスワードを設定してください
            </Fieldset.HelperText>
          </VStack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>メールアドレス</Field.Label>
              <Input
                name="email"
                type="email"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>パスワード</Field.Label>
              <Input name="password" />
            </Field.Root>
          </Fieldset.Content>

          <Button
            type="submit"
            alignSelf={'center'}
          >
            ログイン
          </Button>
        </Fieldset.Root>
      </Box>
    </Flex>
  )
}
