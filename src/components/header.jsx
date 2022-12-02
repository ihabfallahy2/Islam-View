import React from 'react'
import { useToast } from '@chakra-ui/react'

import { Box, Heading, Button, Flex, Spacer, Icon } from '@chakra-ui/react'

import { GiPrayerBeads } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";

export function Header(CONF) {

    const toast = useToast();

    const tp = {
        title: CONF.configuration.proyect_current_state,
        variant: 'left-accent',
        description: "Version : " + CONF.configuration.proyect_version,
        status: 'info',
        duration: 6000,
        isClosable: true,
    }

    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.footer} boxShadow='dark-lg'>
                <Flex align="center" ml={3} mr={2} >
                    <Heading fontSize={{ base: '24px', md: '40px', lg: '45px' }}><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" /> Islam View</Heading>
                    <Spacer />
                    <Button bg={CONF.styles.color} onClick={() => toast(tp)}> <Icon as={BiAnalyse} w={8} h={8} color="blue.20" /></Button>
                </Flex>
            </Box>
        </>
    )
}