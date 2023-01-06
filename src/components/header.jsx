import React from 'react'
import { useToast, Box, Heading, Button, Flex, Spacer, Icon, Hide, Show, Tooltip } from '@chakra-ui/react'

import { GiPrayerBeads } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";

function t(toast,CONF){ 

    const tp = {
        title: CONF.configuration.proyect_current_state,
        variant: 'left-accent',
        description: "Version : " + CONF.configuration.proyect_version,
        status: 'info',
        duration: 6000,
        isClosable: true,
    }

    return toast(tp);
}
export function Header(CONF) {
    const toast = useToast();
    
    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.footer} boxShadow='dark-lg'>
                <Flex align="center" ml={3} mr={2} >
                <Show below="sm" ><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" fontSize={{ base: '24px', md: '40px', lg: '45px' }} /></Show>
                    <Hide below="sm"><Heading fontSize={{ base: '24px', md: '40px', lg: '45px' }}><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" /> Islam View</Heading></Hide>
                    <Spacer />

                    <Tooltip label='Info'>
                        <Button bg={CONF.styles.color} onClick={t(toast,CONF)}> <Icon as={BiAnalyse} w={8} h={8} color="blue.20" /></Button>
                    </Tooltip>
    

                </Flex>
            </Box>
        </>
    )
}