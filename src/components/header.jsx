import React, { useState, useEffect } from 'react'
import { useToast, Box, Heading, Button, Flex, Spacer, Icon, Hide, Show, Tooltip } from '@chakra-ui/react'

import { GiPrayerBeads } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";


export function Header(CONF) {
    const toast = useToast();
    const id = "informador";

    const [tags, setTags] = useState([])

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(CONF.configuration.REFS_TAGS);
                const data = await response.json();
                
                let actualTag = 0;
                for (let e of data) {
                    let str = e.ref;
                    let fin = str.replace(/\D/g, "");
                    if (fin > actualTag) {
                        actualTag = fin;
                    }
                }
                
                let transform = actualTag.toString().split('');
                setTags("v" + transform[0] + "." + transform[1] + "." + transform[2]);
                
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    function t() {

        const tp = {
            id,
            title: CONF.configuration.proyect_name +" "+ CONF.configuration.proyect_current_state,
            variant: 'left-accent',
            description: "Version : " + tags,
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