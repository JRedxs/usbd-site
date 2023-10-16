import React from 'react'

import {
    Box,
    Button,
    Flex,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'

export const Login = () => (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
            <Stack spacing="6">
                <Flex justifyContent="center" alignItems="center" height="100%">
                    <img src='/img/usbd.png' alt="logo" width={100} />
                </Flex>
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={{ base: 'xs', md: 'sm' }}>Connexion à votre compte</Heading>
                    <Text color="fg.muted">
                        Pas encore de compte ?<Link href="#"> Inscrivez-vous</Link>
                    </Text>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" />
                        </FormControl>
                        <PasswordField />
                    </Stack>
                    <HStack justify="space-between">
                        <Button variant="text" size="sm">
                            Mot de passe oublié?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button>Connexion</Button>
                        <HStack>
                            <Divider />
                            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                Ou connecter vous avec
                            </Text>
                            <Divider />
                        </HStack>
                        <OAuthButtonGroup />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>
)