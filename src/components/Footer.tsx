import React from 'react';

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa'
import { ReactNode } from 'react'

const Logo = (props: any) => {
    return (
        <img src='/img/usbd.png' alt="logo" width={70} height={35}></img>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            position="fixed" /* Utilisez "fixed" pour fixer le pied de page en bas de la fenêtre */
            bottom="0" /* Le pied de page sera en bas de la fenêtre */
            left="0"
            right="0"
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Text>© 2023 Club USBD</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Facebook'} href={'https://www.facebook.com/profile.php?id=100057554734814&locale=fr_FR'}>
                        <FaFacebook />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
