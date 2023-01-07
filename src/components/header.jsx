import React from 'react'
import { useToast, Box, Heading, Button, Flex, Spacer, Icon, Hide, Show, Tooltip } from '@chakra-ui/react'

import { GiPrayerBeads } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";


export function Header(CONF) {
    const toast = useToast();
    const id = "informador";

    function t() {

        const tp = {
            id,
            title: CONF.configuration.proyect_current_state,
            variant: 'left-accent',
            description: "Version : " + CONF.configuration.proyect_version,
            status: 'info',
            duration: 5000,
            isClosable: true,
        }

        if (!toast.isActive(id)) {
            return toast(tp);
        }
    }


    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.footer} boxShadow='dark-lg'>
                <Flex align="center" ml={3} mr={2} >
                    <Show below="sm" ><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" fontSize={{ base: '24px', md: '40px', lg: '45px' }} /></Show>
                    <Hide below="sm"><Heading fontSize={{ base: '24px', md: '40px', lg: '45px' }}><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" /> Islam View</Heading></Hide>
                    <Spacer />

                    <Tooltip label='Info'>
                        <Button bg={CONF.styles.color} onClick={t}> <Icon as={BiAnalyse} w={8} h={8} color="blue.20" /></Button>
                    </Tooltip>


                </Flex>
            </Box>
        </>
    )
}